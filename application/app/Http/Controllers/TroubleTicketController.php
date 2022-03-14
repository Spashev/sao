<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\TroubleTicket\TroubleTicket;
use App\Models\TroubleTicket\TroubleTicketService;
use App\Models\TroubleTicket\TroubleTicketCity;
use App\Models\TroubleTicket\TroubleTicketChange;
use App\Models\TroubleTicket\TroubleTicketHistory;
use App\Models\TroubleTicket\TroubleTicketSubticket;
use App\Models\TroubleTicket\TroubleTicketJournal;
use App\Models\Catalog\Subnetworks;
use App\Models\Catalog\Settlement;
use App\Models\Services\ServiceProblemCauses;
use App\Models\Services\Services;
use App\Models\Monitoring\Alarms;
use App\Models\Monitoring\AlarmSubtypes;

use App\Models\UserSettings\accessSetting;

use App\Models\Notification\Notification;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Exception;
use Illuminate\Support\Facades\DB;

class TroubleTicketController extends Controller
{
    CONST START_ACTION = 1;

    // GET DATA 
    public function getList(){
        $list = TroubleTicket::join('scheme_actions', 'scheme_actions.id', '=', 'trouble_tickets.id_act')
            ->select('trouble_tickets.*', 'scheme_actions.act_title')
            ->orderBy('trouble_tickets.id', 'desc')->get();
        return response()->json(['list' => $list], 200);
    }

    public function getTicketMenuList(){
        $user_id = auth()->user()->id;

        $menu_list = array();

        $var = new TroubleTicket();

        $menu_list['my'] =  $var->getTicketMyList($user_id)->count();
        $menu_list['my_group'] =  count($var->getTicketMyGroupList($user_id));
        $menu_list['my_service_group'] =  count($var->getTicketServiceMyGroupList($user_id));
        $menu_list['active_service'] =  count($var->getTicketActiveServiceList($user_id));
        $menu_list['active_resource'] =  $var->getTicketActiveResourceList()->count();

        return response()->json(['list' => $menu_list], 200);
    }

    public function getTicketList(Request $request){
        
        $user_id = auth()->user()->id;
        $type_list = $request->get('type');

        // types:
        /*
        1 - my
        2 - my group
        8 - my service group
        3 - active service
        4 - active resource
        5 - 
        */
        $var = new TroubleTicket();
        switch ($type_list) {
            case 1:
                $list =  $var->getTicketMyList($user_id);
            break;
            case 2:
                //$user_groups = $var->getTicketUserGroup($user_id);
                $list =  $var->getTicketMyGroupList($user_id);
            break;
            case 8:
                $list =  $var->getTicketServiceMyGroupList($user_id);
            break;
            case 3:
                $list =  $var->getTicketActiveServiceList($user_id);
            break;
            case 4:
                $list =  $var->getTicketActiveResourceList();
            break;
        }

        //columns
        $columns = array();
        $column = array();

        $column['label'] = "";
        $column['name'] = "priority";
        $column['column_classes'] = "id_prior";
        $column['row_text_alignment'] = "text-left";
        $column['column_text_alignment'] = "text-left";
        $column['sort'] = true;
        $columns[] = $column;
        //row_text_alignment:  "text-left",
        //column_text_alignment:  "text-left",

        //basic
        $column['filter']['type'] = "simple";
        $column['filter']['placeholder']  = "";
        $column['sort'] = true;

        

        if(in_array($type_list,array(1,2,4)))
        {
            $column['label'] = "TTR ID";
            $column['name'] = "id";
            $column['column_classes'] = "id_column";
            $columns[] = $column;

            $column['label'] = "TTS ID";
            $column['name'] = "id_ticket";
            $column['column_classes'] = "id_column";
            $columns[] = $column;
        }

        if(in_array($type_list,array(3,8)))
        {
            $column['label'] = "TTS ID";
            $column['name'] = "id";
            $column['column_classes'] = "id_column";
            $columns[] = $column;

            $column['label'] = "Тип";
            $column['name'] = "tt_type";
            $column['column_classes'] = "id_column";
            $columns[] = $column;

            $column['label'] = "Сеть";
            $column['name'] = "network_label";
            $column['column_classes'] = "def_xs_column";
            $columns[] = $column;

            $column['label'] = "Подсеть";
            $column['name'] = "subnetwork_label";
            $column['column_classes'] = "source_name_column";
            $columns[] = $column;

            $column['label'] = "Сервисы";
            $column['name'] = "services";
            $column['column_classes'] = "source_name_column";
            $columns[] = $column;

            $column['label'] = "Город";
            $column['name'] = "settlement_name";
            $column['column_classes'] = "source_name_column";
            $columns[] = $column;
        }

        $column['label'] = "Объект";
        $column['name'] = "source_name";
        $column['column_classes'] = "";
        $columns[] = $column;

        if(in_array($type_list,array(1,2,4)))
        {
            $column['label'] = "Описание";
            $column['name'] = "description";
            $column['column_classes'] = "source_name_column";
            $columns[] = $column;

            $column['label'] = "Посл. действие";
            $column['name'] = "act_title";
            $column['column_classes'] = "";
            $columns[] = $column;
        }

        $column['label'] = "Дата начала";
        $column['name'] = "start_date";
        $column['column_classes'] = "";
        $columns[] = $column;

        if(in_array($type_list,array(3,8)))
        {
            $column['label'] = "Сайты";
            $column['name'] = "down_site_2g";
            $column['column_classes'] = "id_column";
            $columns[] = $column;

            $column['label'] = "Создатель";
            $column['name'] = "created_user";
            $column['column_classes'] = "id_column";
            $columns[] = $column;
        }

        $column['label'] = "Статус";
        $column['name'] = "status_name";
        $column['column_classes'] = "";
        $columns[] = $column;

        return response()->json(['list' => $list, "columns" => $columns], 200);
    }

    public function getTicket($id){
        $user_id = auth()->user()->id;

        $var = new TroubleTicket();
        $ticket = $var->getTicket($id);
        
        return response()->json(['ticket' => $ticket], 200);
    }

    public function getTicketUpdate($id){
        $user_id = auth()->user()->id;

        $var = new TroubleTicket();
        $ticket = $var->getTicket($id);

        $ticket->start_time = date('H:i', strtotime($ticket['start_date']));
        $ticket->start_date = date('d.m.Y', strtotime($ticket['start_date']));

        if($ticket['finish_date'])
        {
            $ticket->finish_time = date('H:i', strtotime($ticket['finish_date']));
            $ticket->finish_date = date('d.m.Y', strtotime($ticket['finish_date']));
        }

        return response()->json(['ticket' => $ticket], 200);
    }

    public function getTicketActions(Request $request){

        $id = $request->get('id');
        $user_id = auth()->user()->id;

        // TODO need change user_id in select after add all user

        $ticket = TroubleTicket::
            select('trouble_tickets.id_act')
            ->where('trouble_tickets.id', $id)
            ->first();

        $list = DB::select(DB::raw("select distinct t.*, q.user_id, q.act_type 
            from scheme_actions t 
            left join (SELECT a.*, g.group_name, g.id group_id, l.user_id, u.act_type, f.field_name 
            FROM scheme_actions a 
            LEFT JOIN scheme_user_activities u on u.act_id = a.par_act_id
            LEFT JOIN scheme_user_groups g on g.id = u.group_id
            LEFT JOIN scheme_user_lists l on l.group_id = g.id 
            LEFT JOIN scheme_user_fields f on f.id = l.field_id 
            where u.act_type = 3
            ) q on q.id = t.id 
            where t.par_act_id = ". $ticket->id_act ." and q.user_id = ".$user_id." 
            order by t.act_title"));

        return response()->json(['list' => $list], 200);
    }
    
    public function getTicketCities(Request $request){

        $id = $request->get('id');

        $list = TroubleTicketCity::
                join('settlements', 'settlements.id', '=', 'trouble_ticket_cities.id_settlement')
                ->select('trouble_ticket_cities.*', 
                        'settlements.pop_2009',
                        'settlements.oblast',
                        'settlements.raion'
                        )
                ->where('trouble_ticket_cities.id_ticket', $id)
                ->orderBy('trouble_ticket_cities.city_name', 'desc')
                ->get();

        return response()->json(['list' => $list], 200);
    }

    public function getTicketChangeHistory(Request $request){

        $id = $request->get('id');

        //$list = TroubleTicket::getTicketChangeHistory($id);
        $var = new TroubleTicket();
        $list =  $var->getTicketChangeHistory($id);

        return response()->json(['list' => $list], 200);
    }

    public function getTicketHistory(Request $request){

        $id = $request->get('id');

        $var = new TroubleTicket();
        $list =  $var->getTicketHistory($id);

        return response()->json(['list' => $list], 200);
    }

    public function getTicketSubticket($id){

        $user_id = auth()->user()->id;

        $subticket = TroubleTicketSubticket::
            join('scheme_actions', 'scheme_actions.id', '=', 'trouble_ticket_subtickets.id_act')
            ->join('scheme_statuses', 'scheme_statuses.id', '=', 'scheme_actions.status_id')
            ->select('trouble_ticket_subtickets.*', 
                    'scheme_actions.act_title', 
                    'scheme_actions.par_act_id', 
                    'scheme_statuses.name as status_name'
                    )
            ->where('trouble_ticket_subtickets.id', $id)
            ->orderBy('trouble_ticket_subtickets.id', 'desc')
            ->first();

        $actions = DB::select(DB::raw("select t.*, q.group_id, q.group_name, q.user_id, q.act_type, q.field_name 
            from scheme_actions t 
            left join (SELECT a.*, g.group_name, g.id group_id, l.user_id, u.act_type, f.field_name 
              FROM scheme_actions a 
              LEFT JOIN scheme_user_activities u on u.act_id = a.par_act_id
              LEFT JOIN scheme_user_groups g on g.id = u.group_id
              LEFT JOIN scheme_user_lists l on l.group_id = g.id 
              LEFT JOIN scheme_user_fields f on f.id = l.field_id 
              where u.act_type = 3
            ) q on q.id = t.id 
            where t.par_act_id = ". $subticket->id_act ." and q.user_id = ". $user_id ." 
               order by t.act_title"));

        return response()->json(['subticket' => $subticket, "actions" => $actions], 200);
    }

    public function getTicketSubtickets(Request $request){

        $id = $request->get('id');

        $var = new TroubleTicket();
        $list =  $var->getTicketSubtickets($id);

        return response()->json(['list' => $list], 200);
    }

    public function getTicketSubticketHistory(Request $request){
        
        $id = $request->get('id');

        $var = new TroubleTicket();
        $list =  $var->getTicketSubticketHistory($id);

        return response()->json(['list' => $list], 200);
    }

    public function getTicketJournals(Request $request){

        $id = $request->get('id');

        $var = new TroubleTicket();
        $list =  $var->getTicketJournals($id);

        return response()->json(['list' => $list], 200);
    }

    public function getTicketConnected(Request $request){

        $id = $request->get('id');

        $var = new TroubleTicket();
        $list =  $var->getTicketConnected($id);

        return response()->json(['list' => $list], 200);
    }

    public function getTicketSubActions(Request $request){

        $id = $request->get('id');
        $user_id = auth()->user()->id;

        $sub_actions = DB::select(DB::raw("select t.* 
            from scheme_actions t 
            where t.par_act_id = ".$id." 
               order by t.act_title"));

        return response()->json(['list' => $sub_actions], 200);
    }

    public function getTicketAdvanceSearchList(Request $request){

        //$where_request = $request->get('where_request');

        $where_request = $request['where_request'];
        $columns = $request['columns'];
        $types = $request['types'];

        $sql = "SELECT DISTINCT 
                    tt.id, tt.id_act, tt.id_par, 
                    ss.name status_name, 
                    case
                        when tt.tt_type = 1 then 'Событие' 
                        when tt.tt_type = 2 then 'Инцидент' 
                    end tt_type_name,
                    case
                        when tt.priority = 1 then 'Emergency' 
                        when tt.priority = 2 then 'Critical' 
                        when tt.priority = 3 then 'High' 
                        when tt.priority = 4 then 'Medium' 
                        when tt.priority = 5 then 'Low' 
                    end priority_name,
                    tt.affection,
                    tt.influence,
                    sn.network network_label,
                    sn.subnetwork_1 || ': ' ||  sn.subnetwork_2 || ': ' || sn.subnetwork_3  subnetwork_label,  
                    tt.source_name,
                    tt.down_site_2g, tt.down_site_3g, tt.down_site_4g,
                    st.name_ru settlement_name, 
                    tt.start_date,
                    tt.finish_date, 
                    spc.cause_1_name || ': ' || spc.cause_2_name probably_cause, 
                    tt.description,
                    tt.created_at,
                    u.name created_user ";
        $sql .= "FROM TROUBLE_TICKETS tt ";
        $sql .= "LEFT JOIN SERVICE_SUBNETWORKS sn on sn.ID = tt.NETWORK_TYPE ";
        $sql .= "LEFT JOIN SERVICE_PROBLEM_CAUSES spc on spc.ID = tt.PROBABLE_CAUSE ";
        $sql .= "LEFT JOIN TROUBLE_TICKET_SERVICES ts on ts.ID_TICKET = tt.ID ";
        $sql .= "LEFT JOIN SERVICES s on s.ID = ts.ID_SERVICE ";
        $sql .= "LEFT JOIN SERVICE_GROUPS sg on sg.ID = s.ID_SERVICE_GROUP ";
        $sql .= "LEFT JOIN SCHEME_ACTIONS sa on sa.ID = tt.ID_ACT ";
        $sql .= "LEFT JOIN SCHEME_STATUSES ss on ss.ID = sa.STATUS_ID ";
        $sql .= "LEFT JOIN SETTLEMENTS st on st.ID = tt.ID_SOURCE_SETTLEMENT ";
        $sql .= "LEFT JOIN USERS u on u.ID = tt.CREATED_BY ";

        if(count($columns) > 0)
        {
            $j = 0;
            $sql .= 'WHERE (';

            for ($i = 0; $i < count($columns); $i++) {
                if($j >= 1 && $columns[$i]['search_type'] > 0)
                {
                    $sql .= " AND ";
                }
                if($columns[$i]['search_type'] > 0)
                {
                    $sql .= $columns[$i]['name']." ";
                    $sql .= $types[$columns[$i]['search_type']]['start'];
                    $sql .= $columns[$i]['search_value'];
                    $sql .= $types[$columns[$i]['search_type']]['end'];
                    $j++;
                }
            }
            $sql .= ")";
        }

        /*
        + t.TT_TYPE = 1 AND 
        + t.ID_PRIORITY != 2 AND 
        + t.AFFECTION = 2 AND 
        + t.INFLUENCE = 2 AND 
        + t.ID_REGION = 1 AND 
        + sn.NETWORK_TYPE = 'Telco' AND 
        + sn.SUBNETWORK LIKE %123% AND 
        + s.SERVICE_NAME LIKE %123% AND 
        + sg.GROUP_NAME LIKE %123% AND 
        + t.SOURCE_NAME LIKE %123% AND 
        - ROOT_CAUSE LIKE %123% AND 
        + t.START_DATE BETWEEN '2021-01-01 00:00' AND '2021-02-01 00:00' AND 
        + t.FINISH_DATE BETWEEN '2021-01-01 00:00' AND '2021-02-01 00:00' AND 
        - DURATION > 20 AND 
        + t.DESCRIPTION LIKE %123% AND 
        - CREATED_BY LIKE %123% AND 
        - RESPONSIBLE LIKE %123% AND 
        - ID_ACTION_STATUS = 4
        */

        $list = DB::select(DB::raw($sql));

        return response()->json(['list' => $list, 'sql_search' => $sql, 'columns' => $columns, 'types' => $types], 200);
    }

    public function getTicketSearchBySourceName(Request $request){
        $datetime_from = date("Y-m-d H:i:s",strtotime("-14 day",strtotime(date('Y-m-d H:i:s'))));

        $sql = "select distinct tt.id, tt.id_act, tt.id_par, 
                    ss.name status_name, 
                    case
                        when tt.tt_type = 1 then 'Событие' 
                        when tt.tt_type = 2 then 'Инцидент' 
                    end tt_type_name,
                    case
                        when tt.priority = 1 then 'Emergency' 
                        when tt.priority = 2 then 'Critical' 
                        when tt.priority = 3 then 'High' 
                        when tt.priority = 4 then 'Medium' 
                        when tt.priority = 5 then 'Low' 
                    end priority_name, 
                    tt.source_name, 
                    tt.start_date,
                    tt.finish_date, 
                    u.name created_user ";
        $sql .= "from trouble_tickets tt ";
        $sql .= "left join scheme_actions sa on sa.id = tt.id_act ";
        $sql .= "left join scheme_statuses ss on ss.id = sa.status_id ";
        $sql .= "left join users u on u.id = tt.created_by ";
        $sql .= "where tt.created_at >= '".$datetime_from."' and ";
        $sql .= "tt.source_name like '%".$request['source_name']."%'";

        $ticket_list = DB::select(DB::raw($sql));

        $sql2 = "select a.*, s.title as subtype_name,  
                    case 
                        when a.technology = '4G' then substring(a.source_name,6,5) 
                        when a.technology = '3G' then substring(a.source_name,1,5)
                        when a.technology = '2G' then substring(a.source_name,1,5)
                    end as id_site ";
        $sql2 .= "from mon_alarms a ";
        $sql2 .= "left join subtypes s on s.id_subtype = a.id_subtype ";
        $sql2 .= "where a.created_at >= '".$datetime_from."' and ";
        $sql2 .= "a.source_name like '%".$request['source_name']."%'";

        $alarm_list = DB::select(DB::raw($sql2));

        return response()->json(['ticket_list' => $ticket_list, 'alarm_list' => $alarm_list], 200);
    }

    public function getTicketAlarmList(){
        $user_id = auth()->user()->id;

        $var = new accessSetting();
        $acc_list = $var->userAccessSettings($user_id);

        $sql = "select q.*, s.id_site, s.site_category 
                from (
                    select a.*, s.title as subtype_name,  
                        case 
                            when a.technology = '4G' then substring(a.source_name,6,5) 
                            when a.technology = '3G' then substring(a.source_name,1,5)
                            when a.technology = '2G' then substring(a.source_name,1,5)
                        end as id_site 
                    from mon_alarms a 
                    left join subtypes s on s.id_subtype = a.id_subtype 
                    where a.is_active = 1 and a.id_trouble is null and a.id_region in (".implode(',',$acc_list['region']).") 
                ) q
                left join adm_sites s on s.id_site = q.id_site";

        $alarms = DB::select($sql);   
        
        /*
        $alarms = Alarms::
            where('is_active', 1)
            ->whereNull('id_trouble')
            ->whereIn('id_region', $regions)
            ->get(); 
            */

        return response()->json(['list' => $alarms], 200);
    }

    public function getTicketCreateData(Request $request){
        $alarm_list = $request['alarm_list'];

        $var = new TroubleTicket();

        $list = $var->autoCreateTicketByAlarm($alarm_list);

        return response()->json(['list' => $list], 200);
    }

    // --- for inform pages
    public function getInformTicketList(Request $request){
        
        $type = $request->get('type');
        $tt_type = $request->get('tt_type');
        $priority = $request->get('priority');
        $network_type = $request->get('network_type');

        $var = new TroubleTicket();
        $list =  $var->getInformTicketActiveServiceList($type,$tt_type,$priority,$network_type);

        //columns
        $columns = array();
        $column = array();

        $column['label'] = "";
        $column['name'] = "priority";
        $column['column_classes'] = "id_prior";
        $column['row_text_alignment'] = "text-left";
        $column['column_text_alignment'] = "text-left";
        $column['sort'] = true;
        $columns[] = $column;

        //basic
        $column['filter']['type'] = "simple";
        $column['filter']['placeholder']  = "";
        $column['sort'] = true;

        $column['label'] = "TTS ID";
        $column['name'] = "id";
        $column['column_classes'] = "id_column";
        $columns[] = $column;

        $column['label'] = "Тип";
        $column['name'] = "tt_type";
        $column['column_classes'] = "id_column";
        $columns[] = $column;

        $column['label'] = "Сеть";
        $column['name'] = "network_label";
        $column['column_classes'] = "def_xs_column";
        $columns[] = $column;

        $column['label'] = "Подсеть";
        $column['name'] = "subnetwork_label";
        $column['column_classes'] = "source_name_column";
        $columns[] = $column;

        $column['label'] = "Город";
        $column['name'] = "settlement_name";
        $column['column_classes'] = "source_name_column";
        $columns[] = $column;

        $column['label'] = "Объект";
        $column['name'] = "source_name";
        $column['column_classes'] = "";
        $columns[] = $column;

        $column['label'] = "Дата начала";
        $column['name'] = "start_date";
        $column['column_classes'] = "";
        $columns[] = $column;

        $column['label'] = "Сайты";
        $column['name'] = "down_site_2g";
        $column['column_classes'] = "id_column";
        $columns[] = $column;

        $column['label'] = "Создатель";
        $column['name'] = "created_user";
        $column['column_classes'] = "id_column";
        $columns[] = $column;

        $column['label'] = "Статус";
        $column['name'] = "status_name";
        $column['column_classes'] = "";
        $columns[] = $column;

        return response()->json(['list' => $list, "columns" => $columns], 200);
    }

    public function getDashboardTicketInfo(Request $request){

        $var = new TroubleTicket();
        $list =  $var->getInformDashboard();

        return response()->json(['map_info' => $list['map_info'], 'main_info' => $list['main_info']], 200);
    }

    // ACTIONS 
    public function createTicket(Request $request){

        $user_id = auth()->user()->id;

        $var = new accessSetting();
        $acc_list = $var->userAccessSettings($user_id);

        $request['inform_type'] = 1;

        if (in_array(9, $acc_list['group'])) // NEED FOR CCTN 9 - is user group of cctn
        {  
            $request['id_act'] = 2;
        }
        elseif (in_array(10, $acc_list['group'])) // NEED FOR SERVICE 10 - is user group of service 
        {
            $request['id_act'] = 71;
            $request['inform_type'] = 2;
        }
        else
        {
            $request['id_act'] = 1;
        }

        $request['id_region'] = 1;
        $request['status'] = 1;
        $request['network_type'] = $request['network_type']['id'];

        $dt_part = explode(".", $request['start_date']);

        $request['start_date'] = $dt_part[2].'-'.$dt_part[1].'-'.$dt_part[0].' '.$request['start_time'];
        $request['probable_cause'] = $request['probable_cause']['id'];
        $request['created_by'] = $user_id;
        
        $services = array();

        foreach ($request['service_type'] as $item) {
            $dt_part = explode(".", $item['start_date']);
            $item['start_date'] = $dt_part[2].'-'.$dt_part[1].'-'.$dt_part[0].' '.$item['start_time'];
            $item['created_by'] = $user_id;

            $services[] = $item;
        }

        $request['service_type'] = $services;

        $var = new TroubleTicket();

        $ticket = $var->saveTicket($request);
        
        if($ticket){

            if($request['inform_type'] == 2)
            {
                $ticket_info = TroubleTicket::
                    join('scheme_actions', 'scheme_actions.id', '=', 'trouble_tickets.id_act')
                    ->join('settlements', 'settlements.id', '=', 'trouble_tickets.id_source_settlement')
                    ->select('trouble_tickets.*', 'scheme_actions.act_title', 'settlements.id_region as id_region_settlement')
                    ->where('trouble_tickets.id', $ticket->id) 
                    ->first();

                $ticket_info->append('service_list')->toArray();

                $test = new Notification();
                $em_res = $test->SendTtNotification($ticket_info);

                $sql = "update trouble_tickets set need_inform = 2 
                        where id = ".$ticket->id;

                DB::update($sql);
            }

            return response()->json(["success" => 1, "ticket" => $ticket], 200);
        }else{
            throw new Exception("Error in saving data!");
        }
    }

    public function updateTicket(Request $request){

        $user_id = auth()->user()->id;

        $request['status'] = 1;
        $request['user_id'] = $user_id;
        $request['created_by'] = $user_id;

        if($request['start_date'])
        {
            $dt_part = explode(".", $request['start_date']);

            $request['start_date'] = $dt_part[2].'-'.$dt_part[1].'-'.$dt_part[0].' '.$request['start_time'];
        }

        if($request['finish_date'])
        {
            $dt_part = explode(".", $request['finish_date']);

            $request['finish_date'] = $dt_part[2].'-'.$dt_part[1].'-'.$dt_part[0].' '.$request['finish_time'];
        }

        $request['network_type'] = $request['network_list']['id'];
        $request['probable_cause'] = $request['prob_cause_list']['id'];

        //TODO INCORRECT WORKING
        $services = array();

        foreach ($request['service_type'] as $item) {
            $dt_part = explode(".", $item['start_date']);
            $item['start_date'] = $dt_part[2].'-'.$dt_part[1].'-'.$dt_part[0].' '.$item['start_time'];
            $item['created_by'] = $user_id;

            $services[] = $item;
        }

        $request['service_type'] = $services;

        $var = new TroubleTicket();

        $result = $var->updateTicket($request);

        if($result){
            

            return response()->json(["success" => 1, "ticket" => $result], 200);
        }else{
            throw new Exception("Error in saving data!");
        }
    }

    public function updateAction(Request $request){

        if($request['id_act_bck'] > 0)
        $request['id_act'] = $request['id_act_bck'];

        $request['user_id'] = auth()->user()->id;
        
        $request['id_ticket'] = $request['id'];
        $request['id_subticket'] = 0;
        $request['action_type'] = 1;
        $request['action_name'] = $request['act_title'];
        $request['created_by'] = auth()->user()->id;

        $var = new TroubleTicket();

        $result = $var->updateTicketAction($request);

        if($result){

            $ticket = TroubleTicket::findOrFail($request['id']);
            
            if(($ticket->inform_type == 2)&&($ticket->action->status_id == 5))
            {
                $ticket_info = TroubleTicket::
                    join('scheme_actions', 'scheme_actions.id', '=', 'trouble_tickets.id_act')
                    ->join('settlements', 'settlements.id', '=', 'trouble_tickets.id_source_settlement')
                    ->select('trouble_tickets.*', 'scheme_actions.act_title', 'settlements.id_region as id_region_settlement')
                    ->where('trouble_tickets.id', $ticket->id) 
                    ->first();

                $ticket_info->append('service_list')->toArray();

                $test = new Notification();
                $em_res = $test->SendTtNotification($ticket_info);

                $sql = "update trouble_tickets set need_inform = 2 
                        where id = ".$ticket->id;

                DB::update($sql);

                $var2 = new TroubleTicket();

                $req = array();
                $req['id_ticket'] = $request['id'];
                $req['id_subticket'] = 0;
                $req['action_type'] = 12;
                $req['id_act'] = null;
                $req['action_name'] = 'Отправлено уведомление';
                $req['comment'] = '-';
                $req['created_by'] = auth()->user()->id;
                $hist = $var2->saveTicketHistory($req);
            }
            

            return response()->json(["success" => 1, "ticket" => $result], 200);
        }else{
            throw new Exception("Error in saving data!");
        }
        
    }

    public function updateSubticketAction(Request $request){
        $subticket = TroubleTicketSubticket::findOrFail($request['id_subticket']);
        $user_id = auth()->user()->id;

        if($request['id_act_bck'] > 0)
        $request['id_act'] = $request['id_act_bck'];

        $var = new TroubleTicket();
        $solver_info = $var->getTicketSolverInfo($request['id_act'],$user_id);
        $request['solver_group'] = $solver_info['group'];
        $request['solver_user'] = $solver_info['user'];

        $subticket = $subticket->update($request->only([
            'id_act',
            'solver_group',
            'solver_user'
        ]));

        if($subticket){

            $request['action_type'] = 9;
            $request['created_by'] = $user_id;
            $request['action_name'] = $request['act_title'];
            $hist = $var->saveTicketHistory($request);

            return response()->json(["success" => 1], 200);
        }else{
            throw new Exception("Error in saving data!");
        }
    }

    public function createSubTicket(Request $request){

        $user_id = auth()->user()->id;

        $request['status'] = 1;
        $request['start_date'] = Carbon::now();
        $request['last_comment'] = '-';
        $request['created_by'] = $user_id;

        $solver_cats = null;

        if($request['id_region'] == 1) // almaty
            $solver_cats = 10;
        if($request['id_region'] == 8) // astana
            $solver_cats = 11;
        if($request['id_region'] == 3) // north
            $solver_cats = 12;
        if($request['id_region'] == 2) // south
            $solver_cats = 13;
        if($request['id_region'] == 7) // east
            $solver_cats = 14;
        if($request['id_region'] == 4) // west
            $solver_cats = 15;

        $request['solver_cats'] = $solver_cats;

        // get group and user by action and status
        $var = new TroubleTicket();
        $solver_info = $var->getTicketSolverInfo($request['id_act'],$user_id);
        $request['solver_group'] = $solver_info['group'];
        $request['solver_user'] = $solver_info['user'];

        $ticket = TroubleTicketSubticket::create($request->only([
            'id_ticket',
            'id_act',
            'source_name',
            'start_date',
            'description',
            'last_comment',
            'status',
            'solver_group',
            'solver_user',
            'solver_cats',
            'created_by'
        ]));
        
        if($ticket){
            $request['id_subticket'] = $ticket->id;
            $request['action_type'] = 2;
            $request['action_name'] = $request['act_title'];
            $request['comment'] = '-';
            $request['created_by'] = $user_id;
            $hist = $var->saveTicketHistory($request);

            $list = TroubleTicketSubticket::where('trouble_ticket_subtickets.id_ticket', $request['id_ticket'])
                ->orderBy('trouble_ticket_subtickets.id', 'desc')
                ->get();

            return response()->json(["success" => 1, "list" => $list], 200);
        }else{
            throw new Exception("Error in saving data!");
        }
    }

    public function createTicketJournal(Request $request){

        $user_id = auth()->user()->id;

        $request['created_by'] = $user_id;

        $var = new TroubleTicket();

        $journal = TroubleTicketJournal::create($request->only([
            'id_ticket',
            'id_subticket',
            'journal_type',
            'comment',
            'created_by'
        ]));
        
        if($journal){

            if($request['id_subticket'] > 0)
                $type_history = 8;
            else 
                $type_history = 7;

            $request['id_act'] = null;
            $request['action_name'] = '-';
            $request['action_type'] = $type_history;
            $request['created_by'] = $user_id;
            $hist = $var->saveTicketHistory($request);

            $list =  $var->getTicketJournals($request['id_ticket']);

            return response()->json(["success" => 1, "list" => $list], 200);
        }else{
            throw new Exception("Error in saving data!");
        }
    }

    public function updateConnectedTickets(Request $request){

        $user_id = auth()->user()->id;

        $var = new TroubleTicket();
        $ticket = $var->connectTicket($request,$user_id);

        $list = $var->getTicketConnected($ticket->id);
        
        return response()->json(["success" => 1, "list" => $list], 200);
    }

    public function updateUnconnectedTickets(Request $request){

        $user_id = auth()->user()->id;

        $var = new TroubleTicket();
        $ticket = $var->unconnectTicket($request,$user_id);

        $list = $var->getTicketConnected($ticket->id);
        
        return response()->json(["success" => 1, "list" => $list], 200);
    }

    public function sendTicketNotification(Request $request){

        $ticket = TroubleTicket::findOrFail($request['id_ticket']);
        $user_id = auth()->user()->id;
            
        if($ticket)
        {
            $ticket_info = TroubleTicket::
                join('scheme_actions', 'scheme_actions.id', '=', 'trouble_tickets.id_act')
                ->join('settlements', 'settlements.id', '=', 'trouble_tickets.id_source_settlement')
                ->select('trouble_tickets.*', 'scheme_actions.act_title', 'settlements.id_region as id_region_settlement')
                ->where('trouble_tickets.id', $ticket->id) 
                ->first();

            $ticket_info->append('service_list')->toArray();

            $test = new Notification();
            $em_res = $test->SendTtNotification($ticket_info);

            $sql = "update trouble_tickets set need_inform = 2 
                    where id = ".$ticket->id;

            DB::update($sql);

            $var2 = new TroubleTicket();

            $req = array();
            $req['id_ticket'] = $request['id_ticket'];
            $req['id_subticket'] = 0;
            $req['action_type'] = 12;
            $req['id_act'] = null;
            $req['action_name'] = 'Отправлено уведомление';
            $req['comment'] = '-';
            $req['created_by'] = $user_id;
            $hist = $var2->saveTicketHistory($req);
        }
        
        return response()->json(["success" => 1, "message" => 'Уведомление отправлено!'], 200);
    }

    function identical_values( $arrayA , $arrayB ) {

        sort( $arrayA );
        sort( $arrayB );
    
        return $arrayA == $arrayB;
    }

    // ADDITION REQUEST 
    public function getExtTicketList(Request $request){
        $type = $request->get('type');
        // 1 - for contractor
        // 2 - for PrivateLTE KazMin

        $list = array();
        if($type == 2)
        {
            $resource_ticket_list = array();

            $sql = "select tt.*, string_agg(se.service_name, ', ') services, s.name_ru settlement_name, 
                            u.name created_user, 
                            ss.name status_name, 
                            sb.network network_label,
                            sb.subnetwork_1 || ': ' ||  sb.subnetwork_2 || ': ' || sb.subnetwork_3  subnetwork_label
                    from trouble_tickets tt 
                    left join scheme_actions sa on sa.id = tt.id_act 
                    left join scheme_statuses ss on ss.id = sa.status_id 
                    left join scheme_user_activities ssa on ssa.act_id = sa.id
                    left join settlements s on s.id = tt.id_source_settlement 
                    left join service_subnetworks sb on sb.id = tt.network_type 
                    left join trouble_ticket_services tts on tts.id_ticket = tt.id 
                    left join services se on se.id = tts.id_service  
                    left join users u on u.id = tt.created_by 
                    where tt.status = 1 and 
                        sa.status_id not in (1,5,7) and 
                        tt.source_name like '%_KP' 
                    group by tt.id, tts.id_ticket, s.name_ru, u.name, ss.name, sb.network, sb.subnetwork_1, sb.subnetwork_2, sb.subnetwork_3 
                    order by tt.id desc";

            $service_ticket_list = DB::select($sql);

            $sql2 = "select a.technology, 
                        a.id,
                        case 
                            when a.technology = '4G' then substring(a.source_name,6,5) 
                            when a.technology = '3G' then substring(a.source_name,1,5)
                            when a.technology = '2G' then substring(a.source_name,1,5)
                        end as id_site, 
                        a.source_name,
                        a.id_subtype,
                        a.date_raised,
                        a.fault_name
                    from mon_alarms as a 	
                    where a.is_active =1 and a.source_name like '%_KP'";

            $alarms = DB::select($sql2);

            $list['alarms'] = $alarms;
            $list['service_tickets'] = $service_ticket_list;

        }

        return response()->json(['data' => $list], 200);
    }


    // TODO need optimize this function and remove in models
    function ticket_changed( $fields, $old_value, $new_value, $id_ticket, $id_user) {
        
        $id_group_changes = round(microtime(true) * 1000);

        foreach ($fields as $f) {

            $old_field_val_id = null; $new_field_val_id = null;
            $old_field_val = $old_value[$f];
            $new_field_val = $new_value[$f];
            $group_field_label = 'main';
            $group_field_name = 'main';
            $field_name = $f;

            switch ($f) {
                // field_type:  1 - basic text; 2 - dropdown value; 3 - radio group value; 4 - dropdown multi value; 
                
                case "source_name":
                    $field_type = 1;
                    $field_label = 'Объект';
                break;
                case "start_date":
                    $field_type = 1;
                    $field_label = 'Время начала';
                break;
                case "finish_date":
                    $field_type = 1;
                    $field_label = 'Время завершения';
                break;
                case "priority":
                    $field_type = 2;
                    $field_label = 'Приоритет';

                    $old_field_val_id = $old_value[$f];
                    $new_field_val_id = $new_value[$f];

                    switch ($old_value[$f]) {
                        case 1:
                            $old_field_val = 'Emergency';
                        break;
                        case 2:
                            $old_field_val = 'Critical';
                        break;
                        case 3:
                            $old_field_val = 'High';
                        break;
                        case 4:
                            $old_field_val = 'Medium';
                        break;
                        case 5:
                            $old_field_val = 'Low';
                        break;
                    }

                    switch ($new_value[$f]) {
                        case 1:
                            $new_field_val = 'Emergency';
                        break;
                        case 2:
                            $new_field_val = 'Critical';
                        break;
                        case 3:
                            $new_field_val = 'High';
                        break;
                        case 4:
                            $new_field_val = 'Medium';
                        break;
                        case 5:
                            $new_field_val = 'Low';
                        break;
                    }

                break;
                case "description":
                    $field_type = 1;
                    $field_label = 'Доп. информация';
                break;
                
                case "affection":
                    $field_type = 2;
                    $field_label = 'Влияние на сервис';
                    
                    $old_field_val_id = $old_value[$f];
                    $new_field_val_id = $new_value[$f];

                    switch ($old_value[$f]) {
                        case 1:
                            $old_field_val = 'Нет';
                        break;
                        case 2:
                            $old_field_val = 'Да';
                        break;
                        case 3:
                            $old_field_val = 'Деградация';
                        break;
                    }

                    switch ($new_value[$f]) {
                        case 1:
                            $new_field_val = 'Нет';
                        break;
                        case 2:
                            $new_field_val = 'Да';
                        break;
                        case 3:
                            $new_field_val = 'Деградация';
                        break;
                    }
                break;
                case "influence":
                    $field_type = 2;
                    $field_label = 'Бренд';

                    $old_field_val_id = $old_value[$f];
                    $new_field_val_id = $new_value[$f];

                    switch ($old_value[$f]) {
                        case 1:
                            $old_field_val = 'Нет';
                        break;
                        case 2:
                            $old_field_val = 'Kcell';
                        break;
                        case 3:
                            $old_field_val = 'Activ';
                        break;
                        case 4:
                            $old_field_val = 'Все';
                        break;
                    }
                    switch ($new_value[$f]) {
                        case 1:
                            $new_field_val = 'Нет';
                        break;
                        case 2:
                            $new_field_val = 'Kcell';
                        break;
                        case 3:
                            $new_field_val = 'Activ';
                        break;
                        case 4:
                            $new_field_val = 'Все';
                        break;
                    }
                break;

                case "network_type":
                    $field_type = 3;
                    $field_label = 'Подсеть';
                    $f = 'network_list';
                    
                    $old_field_val_id = $old_value[$f]['id'];
                    $old_field_val = $old_value[$f]['network'].': '.$old_value[$f]['label'];

                    $new_field_val_id = $new_value[$f]['id'];
                    $new_field_val = $new_value[$f]['network'].': '.$new_value[$f]['label'];
                break;
                case "probable_cause":
                    $field_type = 3;
                    $field_label = 'Предп. причина';
                    $f = 'prob_cause_list';

                    $old_field_val_id = $old_value[$f]['id'];
                    $old_field_val = $old_value[$f]['label'];

                    $new_field_val_id = $new_value[$f]['id'];
                    $new_field_val = $new_value[$f]['label'];
                break;
                
                case "service_type":
                    $field_type = 4;
                    $field_label = 'Сервисы';

                    $sa_val = '';
                    foreach($new_value['old_'.$f] as $s)
                    {
                        $sa_val .= $s['label']."\r\n";
                    }

                    $old_field_val_id = 0;
                    $old_field_val = $sa_val;
                    
                    $ss_val = '';
                    foreach($new_value[$f] as $s)
                    {
                        $ss_val .= $s['label']."\r\n";
                    }

                    $new_field_val_id = 0;
                    $new_field_val = $ss_val;
                break;
                case "region":
                    $field_type = 4;
                    $field_label = 'Города';
                    
                    $sa_val = '';
                    foreach($new_value['old_'.$f] as $s)
                    {
                        $sa_val .= $s['label']."\r\n";
                    }

                    $old_field_val_id = 0;
                    $old_field_val = $sa_val;
                    
                    $ss_val = '';
                    foreach($new_value[$f] as $s)
                    {
                        $ss_val .= $s['label']."\r\n";
                    }

                    $new_field_val_id = 0;
                    $new_field_val = $ss_val;
                break;
            }

            $changes = [];
            
            $changes['id_ticket'] = $id_ticket;
            $changes['id_group_changes'] = $id_group_changes;
            $changes['field_type'] = $field_type;
            $changes['group_field_label'] = $group_field_label;
            $changes['group_field_name'] = $group_field_name;
            $changes['field_label'] = $field_label;
            $changes['field_name'] = $field_name;
            $changes['old_field_id'] = $old_field_val_id;
            $changes['new_field_id'] = $new_field_val_id;
            $changes['old_field_value'] = $old_field_val;
            $changes['new_field_value'] = $new_field_val;
            $changes['created_by'] = $id_user;

            $change = TroubleTicketChange::create($changes);
            
        }
        
    
        return 'ok';
    }
}
