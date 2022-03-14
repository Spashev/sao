<?php

namespace App\Http\Controllers;

use App\Models\Scheme\SchemeUserList;
use App\Models\Scheme\SchemeUserGroup;
use App\Models\Scheme\SchemeUserField;
use App\Models\UserSettings\accessSetting;

use App\Models\Notification\Notification;
use App\Models\Notification\NotificationTrigger;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class UserSettingsController extends Controller
{

    public function getUserGroupList(Request $request)
    {
        $user_id = auth()->user()->id;

        $group_list = SchemeUserGroup::select('*')->get();
        $field_list = SchemeUserField::select('*')->get();

        return response()->json(['group_list' => $group_list, 'field_list' => $field_list], 200);
    }

    public function getUserSettings(Request $request)
    {
        $user_id = auth()->user()->id;

        $list = SchemeUserList::
            join('scheme_user_groups', 'scheme_user_groups.id', '=', 'scheme_user_lists.group_id')
            ->select('scheme_user_lists.*','scheme_user_groups.comp_id')
            ->where('scheme_user_lists.user_id', $user_id)
            ->get();
        
        $field_list = array();
        $field_list[1] = array();
        $field_list[2] = array();

        $group_id = array();
        foreach($list as $l)
        {
            $field_list[$l->comp_id][] = $l->field_id;
            $group_id[$l->comp_id] = $l->group_id;
        }

        return response()->json(['regions' => $field_list, 'group' => $group_id], 200);
    }

    public function setUserToRegions(Request $request)
    {

        $group_list = SchemeUserGroup::select('id')->where('comp_id', $request['comp_id'])->get();
    
        foreach($group_list as $l)
        {
            DB::table('scheme_user_lists')
                ->where('user_id', auth()->user()->id)
                ->where('group_id', $l->id)
                ->delete();
        }

        foreach ($request['field_list'][$request['comp_id']] as $item) {

            $res_id = DB::table('scheme_user_lists')->insert([
                'user_id' => auth()->user()->id,
                'group_id' => $request['group_id'][$request['comp_id']],
                'field_id' => $item,
                'is_email' => 0,
                'is_admin' => 0
            ]);
        }

        return response()->json(['success' => 'completed'], 200);
    }

    public function getUserNotifications(Request $request)
    {
        $user_id = auth()->user()->id;

        $list = Notification::
            join('notification_triggers', 'notification_triggers.id', '=', 'notifications.id_trigger')
            ->select('notification_triggers.*')
            ->where('notifications.id_user', $user_id)
            ->where('notifications.id_comp', 1)
            ->get();
        
        $region_list = array();
        foreach($list as $l)
        {
            $region_list[] = $l->id_region;
            $priority = $l->id_priority;
            $tt_type = $l->id_tt_type;
            $serv_cat = $l->id_serv_cat;
        }

        return response()->json(['region' => $region_list, 'priority' => $priority, 'tt_type' => $tt_type, 'serv_cat' => $serv_cat], 200);
    }

    public function setUserNotifications(Request $request)
    {
        
        DB::table('notifications')
            ->where('id_user', auth()->user()->id)
            ->where('id_comp', 1)
            ->delete();
        
        foreach($request['region'] as $region)
        {
            $list = NotificationTrigger::
                select('id')
                ->where('id_priority', $request['priority'])
                ->where('id_region', $region)
                ->where('id_tt_type', $request['tt_type'])
                ->where('id_serv_cat', $request['serv_cat'])
                ->first();

            if($list)
            {
                $status = 'inserted';

                $trigger_id = $list['id'];
            }
            else 
            {
                $status = 'not found';

                $trigger_id = DB::table('notification_triggers')->insertGetId([
                    'id_priority' => $request['priority'],
                    'id_region' => $region,
                    'id_tt_type' => $request['tt_type'],
                    'id_serv_cat' => $request['serv_cat'],
                    'created_at' => now()
                ]);
            }

            $res_id = DB::table('notifications')->insert([
                'id_comp' => 1,
                'id_trigger' => $trigger_id,
                'id_user' => auth()->user()->id,
                'inform_type' => 2,
                'created_at' => now()
            ]);
        }
        

        return response()->json(['success' => $status], 200);
    }
    
}
