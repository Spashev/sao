<?php

namespace App\Models;

use Carbon\Carbon;

class AclModel
{

    private const ROLES_TABLE = 'acl_roles';
    private const ACTIONS_TABLE = 'acl_actions';
    private const RIGHTS_TABLE = 'acl_rights';
    private const USERS_TABLE = 'users';

    /**
     * Добавить новую роль
     *
     * @param  integer $id - id пользователя добавляющего новую роль
     * @param  string $name - Имя новой роли
     * @param  string $description - Описание новой роли
     * @param  integer $parent_id - id родительской роли
     * @return integer - Возвращает id новой записи в базе
     */
    public static function createRole($id, $name, $description, $parent_id)
    {
        $payload = [
            'created_at' => Carbon::now(),
            'name' => $name,
            'description' => $description,
            'parent_id' => $parent_id,
        ];
        is_null($userId) ?: $payload['id_who_changed'] = $userId;
        return \DB::table(self::ROLES_TABLE)->insertGetId($payload);
    }

    /**
     * Возвращает массив содержащий роли
     *
     * @param  array $id - Массив с id групп
     * @return array
     */
    public static function getRole($id)
    {
        $data = \DB::table(self::ROLES_TABLE)->select('id', 'parent_id', 'name', 'description')->whereNull('deleted_at');
        is_null($id) ?: $data->whereIn('id', $id);
        return $data->orderBy('id')->get();
    }

    /**
     * Изменение записи о роли
     *
     * @param  integer $userId - id пользователя вносящего изменения
     * @param  integer $id - id роли
     * @param  string $name - Имя роли
     * @param  string $description - Комментарий к роли
     * @param  integer $parent_id - id родительской роли
     * @return boolean
     */
    public static function updateRole($userId, $id, $name, $description, $parent_id)
    {
        $payload = [
            'updated_at' => Carbon::now(),
        ];
        is_null($userId) ?: $payload['id_who_changed'] = $userId;
        is_null($name) ?: $payload['name'] = $name;
        is_null($parent_id) ?: $payload['parent_id'] = $parent_id;
        is_null($description) ?: $payload['description'] = $description;
        return boolval(\DB::table(self::ROLES_TABLE)->where('id', $id)->update($payload));
    }

    /**
     * Мягкое удаление записи о роле
     *
     * @param  integer $userId
     * @param  integer $id
     * @return boolean
     */
    public static function deleteRole($userId, $id)
    {
        $dateTime = Carbon::now();
        $payload = [
            'updated_at' => $dateTime,
            'deleted_at' => $dateTime,
        ];
        is_null($userId) ?: $payload['id_who_changed'] = $userId;
        return boolval(\DB::table(self::ROLES_TABLE)->where('id', $id)->update($payload));
    }

    /**
     * Возвращает результат проверки доступности имени для регистрации
     *
     * @param  string $name
     * @param  integer $parent_id - id родительской роли
     * @return boolean
     */
    public static function checkRoleName($name, $parent_id)
    {
        $result = \DB::table(self::ROLES_TABLE)->select('id')->whereRaw("LOWER(name)=LOWER('$name')")->where('parent_id', $parent_id);
        return is_null($result->value('id'));
    }

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Actions ~~~ */

    /**
     * Возвращает массив содержащий действия
     *
     * @param  array $id - Массив с id групп
     * @return array
     */
    public static function getAction($id)
    {
        $data = \DB::table(self::ACTIONS_TABLE)->select('id', 'app_id', 'action', 'description')->whereNull('deleted_at');
        is_null($id) ?: $data->whereIn('id', $id);
        return $data->orderBy('id')->get();
    }

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Rights ~~~ */

    /**
     * Возвращает массив содержащий права для ролей
     *
     * @param  array $id - Массив с id групп
     * @return array
     */
    public static function getRight($id)
    {
        $data = \DB::table(self::RIGHTS_TABLE)->select('id', 'role_id', 'action_id', 'sign')->whereNull('deleted_at');
        is_null($id) ?: $data->whereIn('id', $id);
        return $data->orderBy('id')->get();
    }

    /**
     * Добавляет или изменяет права для ролей
     *
     * @param  integer $userId
     * @param  integer $role_id
     * @param  integer $action_id
     * @param  integer $sign
     * @return boolean
     */
    public static function updateRight($userId, $role_id, $action_id, $sign)
    {
        $payload = [
            'updated_at' => Carbon::now(),
            'deleted_at' => null,
            'sign' => $sign,
        ];
        is_null($userId) ?: $payload['id_who_changed'] = $userId;
        return \DB::table(self::RIGHTS_TABLE)->updateOrInsert(['role_id' => $role_id, 'action_id' => $action_id], $payload);
    }

    /**
     * Мягкое удаление записи о правах для ролей
     *
     * @param  integer $userId
     * @param  integer $role_id
     * @param  integer $action_id
     * @return boolean
     */
    public static function deleteRight($userId, $role_id, $action_id)
    {
        $dateTime = Carbon::now();
        $payload = [
            'updated_at' => $dateTime,
            'deleted_at' => $dateTime,
        ];
        is_null($userId) ?: $payload['id_who_changed'] = $userId;
        return \DB::table(self::RIGHTS_TABLE)->where('role_id', $role_id)->where('action_id', $action_id)->update($payload);
    }

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Users ~~~ */

    /**
     * Возвращает массив содержащий пользователей
     *
     * @param  array $id - Массив с id групп
     * @return array
     */
    public static function getUser($id)
    {
        $data = \DB::table(self::USERS_TABLE)->select('id', 'name', 'role_id')->whereNull('deleted_at');
        is_null($id) ?: $data->whereIn('id', $id);
        return $data->orderBy('id')->get();
    }

    /**
     * Изменяет права для пользователя
     *
     * @param  integer $userId
     * @param  integer $id
     * @param  integer $role_id
     * @return boolean
     */
    public static function updateUser($userId, $id, $role_id)
    {
        $payload = [
            'updated_at' => Carbon::now(),
            'role_id' => $role_id,
        ];
        is_null($userId) ?: $payload['id_who_changed'] = $userId;
        return \DB::table(self::USERS_TABLE)->where('id', $id)->update($payload);
    }

}
