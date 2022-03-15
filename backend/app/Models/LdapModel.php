<?php

/**
 *
 * Модель для работы с AD-сервером
 *
 */

namespace App\Models;

use App\UserGroup;

class LdapModel
{
    private $email;
    private $password;
    private const AD_SERVER = 'ldap://ldap.kcell.kz';
    private const BASE_DN = 'OU=KCELL,DC=kcell,DC=kz';
    private const ATTRIBUTES = [
        'uid' => 'employeeId',
        'name' => 'name',
        'email' => 'mail',
        'position' => 'title',
        'department' => 'department',
        'phone' => 'physicalDeliveryOfficeName',
        'mobile' => 'mobile',
        'manager' => 'manager',
        'photo' => 'info',
        'kcelldepeng' => 'kcelldepeng',
        'kcelllevel2nameeng' => 'kcelllevel2nameeng',
        'kcelllevel3nameeng' => 'kcelllevel3nameeng',
        'kcelllevel4nameeng' => 'kcelllevel4nameeng',
    ];

    /**
     * __construct
     *
     * @param  String $email
     * @param  String $password
     *
     * @return void
     */
    public function __construct($props)
    {
        $this->email($props['email']);
        $this->password($props['password']);
    }

    /**
     * Сеттер для email
     *
     * @param  String $email
     *
     * @return void
     */
    public function email($email)
    {
        $this->email = $email ?? null;
    }

    /**
     * Сеттер для password
     *
     * @param  String $password
     *
     * @return void
     */
    public function password($password)
    {
        $this->password = $password ?? null;
    }

    /**
     * Аутентификация пользователя в AD
     *
     * @return Boolean
     */
    public function authUser()
    {
        if (isset($this->email) && isset($this->password)) {
            try {
                $connect = ldap_connect(self::AD_SERVER);
                ldap_bind($connect, $this->email, $this->password);
                ldap_close($connect);
                return true;
            } catch (\Throwable $th) {
                // throw $th;
                return false;
            }
        }
        return false;
    }

    /**
     * Возвращает массив с данными полученными от AD 
     *
     * @return mixed
     */
    public function getEntry()
    {
        if (isset($this->email) && isset($this->password)) {
            try {
                $connect = ldap_connect(self::AD_SERVER);
                ldap_bind($connect, $this->email, $this->password);
                $filter = '(&(&(objectclass=user)(objectcategory=person))(mail=' . $this->email . '))';
                $search = ldap_search($connect, self::BASE_DN, $filter, array_values(self::ATTRIBUTES));
                $entry = ldap_get_entries($connect, $search)[0];
                ldap_close($connect);
                foreach (self::ATTRIBUTES as $key => $value) {
                    $result[$key] = $entry[strtolower($value)][0] ?? null;
                }
                $result['group_id'] = self::createGroup($result) ?? null;
                unset($result['kcelldepeng'], $result['kcelllevel2nameeng'], $result['kcelllevel3nameeng'], $result['kcelllevel4nameeng']);
                return $result;
            } catch (\Throwable $th) {
                // throw $th;

                //ldap_bind(): Unable to bind to server: Can't contact LDAP server
                //ldap_bind(): Unable to bind to server: Invalid credentials
                $message = explode(': ', $th->getMessage());
                $message = array_pop($message);
                $codeErrors = ['Can\'t contact LDAP server', 'Invalid credentials'];

                return [
                    'throw' => $th,
                    'error' => $message,
                    'code' => array_search($message, $codeErrors),
                ];
            }
        }
        return [];
    }

    /**
     * Возвращает массив с данными полученными от AD // необходим для ручного добавления пользователя с AD
     *
     * @return mixed
     */
    public function getEntrySearch($search_email)
    {
        if (isset($this->email) && isset($this->password)) {
            try {
                $connect = ldap_connect(self::AD_SERVER);
                ldap_bind($connect, $this->email, $this->password);
                $filter = '(&(&(objectclass=user)(objectcategory=person))(mail=' . $search_email . '))';
                $search = ldap_search($connect, self::BASE_DN, $filter, array_values(self::ATTRIBUTES));
                $entry = ldap_get_entries($connect, $search)[0];
                ldap_close($connect);

                foreach (self::ATTRIBUTES as $key => $value) {
                    $result[$key] = $entry[strtolower($value)][0] ?? null;
                }
                $result['group_id'] = self::createGroup($result) ?? null;
                unset($result['kcelldepeng'], $result['kcelllevel2nameeng'], $result['kcelllevel3nameeng'], $result['kcelllevel4nameeng']);

                return $result;
            } catch (\Throwable $th) {
                $message = explode(': ', $th->getMessage());
                $message = array_pop($message);
                $codeErrors = ['Can\'t contact LDAP server', 'Invalid credentials'];
                return [
                    'throw' => $th,
                    'error' => $message,
                    'code' => array_search($message, $codeErrors),
                ];
            }
        }
    }

    public function createGroup($result){
        $group_id = null;
        $group = new UserGroup();
        if($result['kcelllevel4nameeng'] == null && $result['kcelllevel3nameeng'] == null && $result['kcelllevel2nameeng'] == null){
//            echo "0 - create ".$result['kcelldepeng'];
            $title = $result['kcelldepeng'];
            if(!UserGroup::where('title', $title)->exists()){
                $group->title = $title;
                $group->level_id = 0;
                $group->save();
            }else{
                $group = UserGroup::where('title', $title)->first();
            }
            $group_id = $group->id;
        }else if($result['kcelllevel4nameeng'] == null && $result['kcelllevel3nameeng'] == null){
//            echo "1 - parent " .$result['kcelllevel2nameeng']. " - create: ".$result['kcelldepeng'];
            $title = $result['kcelldepeng'];
            $title_parent = $result['kcelllevel2nameeng'];
            if(!UserGroup::where('title', $title_parent)->exists()){
                $group->title = $title_parent;
                $group->level_id = 0;
                $group->save();
            }else{
                $group = UserGroup::where('title', $title_parent)->first();
            }
            $group2 = new UserGroup();
            if(!UserGroup::where('title', $title)->exists()){
                $group2->title = $title;
                $group2->level_id = 1;
                $group2->parent_id = $group->id;
                $group2->save();
            }else{
                $group2 = UserGroup::where('title', $title)->first();
            }
            $group_id = $group2->id;
        }else if($result['kcelllevel4nameeng'] == null){
//            echo "2 - ".$result['kcelldepeng'];
            $title = $result['kcelldepeng'];
            $title_parent1 = $result['kcelllevel3nameeng'];
            $title_parent2 = $result['kcelllevel2nameeng'];
            if(!UserGroup::where('title', $title_parent1)->exists()){
                $group->title = $title_parent1;
                $group->level_id = 0;
                $group->save();
            }else{
                $group = UserGroup::where('title', $title_parent1)->first();
            }
            $group2 = new UserGroup();
            if(!UserGroup::where('title', $title_parent2)->exists()){
                $group2->title = $title_parent2;
                $group2->level_id = 1;
                $group2->parent_id = $group->id;
                $group2->save();
            }else{
                $group2 = UserGroup::where('title', $title_parent2)->first();
            }
            if(!UserGroup::where('title', $title)->exists()){
                $group3 = new UserGroup();
                $group3->title = $title;
                $group3->level_id = 2;
                $group3->parent_id = $group2->id;
                $group3->save();
            }else{
                $group3 = UserGroup::where('title', $title)->first();
            }
            $group_id = $group3->id;
        }else if($result['kcelllevel4nameeng'] != null && $result['kcelllevel3nameeng'] != null && $result['kcelllevel2nameeng'] != null){
//            echo "3 - ".$result['kcelldepeng'];
            $title = $result['kcelldepeng'];
            $title_parent1 = $result['kcelllevel4nameeng'];
            $title_parent2 = $result['kcelllevel3nameeng'];
            $title_parent3 = $result['kcelllevel2nameeng'];
            if(!UserGroup::where('title', $title_parent1)->exists()){
                $group->title = $title_parent1;
                $group->level_id = 0;
                $group->save();
            }else{
                $group = UserGroup::where('title', $title_parent1)->first();
            }
            $group2 = new UserGroup();
            if(!UserGroup::where('title', $title_parent2)->exists()){
                $group2->title = $title_parent2;
                $group2->level_id = 1;
                $group2->parent_id = $group->id;
                $group2->save();
            }else{
                $group2 = UserGroup::where('title', $title_parent2)->first();
            }
            $group3 = new UserGroup();
            if(!UserGroup::where('title', $title_parent3)->exists()){
                $group3->title = $title_parent3;
                $group3->level_id = 2;
                $group3->parent_id = $group2->id;
                $group3->save();
            }else{
                $group3 = UserGroup::where('title', $title_parent3)->first();
            }
            if(!UserGroup::where('title', $title)->exists()){
                $group4 = new UserGroup();
                $group4->title = $title;
                $group4->level_id = 3;
                $group4->parent_id = $group3->id;
                $group4->save();
            }else{
                $group4 = UserGroup::where('title', $title)->first();
            }
            $group_id = $group4->id;
        }

        return $group_id;
    }
}
