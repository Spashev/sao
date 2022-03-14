<?php
namespace App\Models\UserSettings;

use Illuminate\Database\Eloquent\Model;
use App\Models\Scheme\SchemeUserList;

class accessSetting
{

    // TODO NEED CREATE MATRXI IN DB 
    public function userAccessSettings($user_id){
        $list = SchemeUserList::
            leftJoin('scheme_user_groups', 'scheme_user_groups.id', '=', 'scheme_user_lists.group_id')
            ->select('scheme_user_lists.*', 'scheme_user_groups.comp_id', 'scheme_user_groups.group_name')
            ->where('user_id', $user_id)  // 5 - closed; 7 - another tt
            ->get();

        $list_ss = array();
        $region_list = array();
        $group_list = array();
        $resource_cats = array();
        foreach($list as $l)
        {
            if($l->comp_id == 1)
            {
                if($l->field_id == 3) // almaty
                $region_list[] = 1;
                if($l->field_id == 4) // astana
                $region_list[] = 8;
                if($l->field_id == 5) // north
                $region_list[] = 3;
                if($l->field_id == 6) // south
                $region_list[] = 2;
                if($l->field_id == 7) // east
                $region_list[] = 7;
                if($l->field_id == 8) // west
                $region_list[] = 4;
                if($l->field_id == 9) // all
                $region_list[] = 10;
            }

            if($l->comp_id == 2)
            {
                $resource_cats[] = $l->field_id;
            }
            

            $group_list[$l->group_id] = $l->group_id;
        }
        $list_ss['region'] = $region_list;

        $group_list = array_values($group_list);
        $list_ss['group'] = $group_list;

        $list_ss['resource_cats'] = $resource_cats;

        return $list_ss;
    }
}