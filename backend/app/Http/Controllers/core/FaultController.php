<?php
namespace App\Http\Controllers\core;

use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Services\ServicePriorities;
use App\Models\Trigger\TroubleTicketTrigger;
use App\Models\TroubleTicket\TroubleTicket;
use App\Models\Catalog\NetworkHardware;

class FaultController extends Controller
{

    public function createTicketByData(Request $data)
    {
        /*
        trigger_type
        start_date
        source_name
        description
        */

        $req_data = TroubleTicketTrigger::select('*')->where('trigger_name', $data['trigger_type'])->first();

        if($req_data['network_type_from'] == 2)
        {
            $network_type_desc = NetworkHardware::
                select('network_type')
                ->where('source_name', $data['source_name'])
                ->first();
            
            if(!$network_type_desc['network_type'])
                return response()->json(['status' => 'Network type is not founded'], 500);
            else 
                $network_type = $network_type_desc['network_type'];
            
        }
        else 
        {
            $network_type = $req_data['network_type'];
        }

        if($req_data['kato_from'] == 2)
        {
            $settlement_desc = NetworkHardware::
                join('settlements', 'settlements.id', '=', 'adm_network_hardware.settlement_id')
                ->select(DB::raw("settlements.id, CONCAT(settlements.name_ru,' (',settlements.bdd,')') AS label, settlements.city_type"))
                ->where('adm_network_hardware.source_name', $data['source_name'])
                ->first();
            
            if(!$settlement_desc['id'])
                return response()->json(['status' => 'Settlement is not founded'], 500);
            
        }
        
        $request = array(); 
        
        $request['id_act'] = $req_data['action_id'];
        $request['id_region'] = 1;
        $request['tt_type'] = $req_data['tt_type'];
        $request['status'] = 1;
        $request['network_type'] = $network_type;
        $request['start_date'] = $data['start_date'];
        $request['source_name'] = $data['source_name'];
        $request['description'] = $data['description']; 
        $request['probable_cause'] = $req_data['prob_cause'];
        $request['down_site_2g'] = 0;
        $request['down_site_3g'] = 0;
        $request['down_site_4g'] = 0;
        $request['id_service'] = $req_data['service'];
        $request['id_influence'] = $req_data['service_influence'];
        $request['affection'] = $req_data['affection'];
        $request['influence'] = $req_data['influence'];
        $request['inform_type'] = 1;
        $request['created_by'] = 4;
        $request['user_id'] = 4;

        if($req_data['kato_from'] == 2)
        {
            $settlement_desc = NetworkHardware::
                join('settlements', 'settlements.id', '=', 'adm_network_hardware.settlement_id')
                ->select(DB::raw("settlements.id, CONCAT(settlements.name_ru,' (',settlements.bdd,')') AS label, settlements.city_type"))
                ->where('adm_network_hardware.source_name', $data['source_name'])
                ->first();
            
            if(!$settlement_desc['id'])
                return response()->json(['status' => 'Settlement is not founded'], 500);
            
        }

        $priority = ServicePriorities::
            select('service_priorities.id_priority')
            ->where('id_service', $request['id_service'])
            ->where('id_influence', $request['id_influence'])
            ->where('id_city_type', $settlement_desc['city_type'])
            ->first();

        $request['priority'] = $priority['id_priority'];

        $request['service_type'] = array();

        $req = array();
        $req['id_service'] = $request['id_service'];
        $req['id_influence'] = $request['id_influence'];
        $req['start_date'] = $request['start_date']; 
        $req['created_by'] = 1;
        $req['alarms'] = array();

        $req_t = array();
        $req_t[] = $req;
        $request['service_type'] = $req_t;
        $request['old_service_type'] = $req_t;

        $request['region'] = array();
        
        $reqr = array();
        $reqr['id'] = $settlement_desc['id'];
        $reqr['label'] = $settlement_desc['label'];
        $reqr_t =array();
        $reqr_t[] = $reqr;
        $request['region'] = $reqr_t;
        $request['old_region'] = $reqr_t;

        $request = new Request($request);

        $sql = "select tt.id  
                from trouble_tickets tt 
                left join scheme_actions sa on sa.id = tt.id_act 
                where sa.status_id not in (5,6,7) and tt.created_by = 4 and tt.source_name = '".$data['source_name']."'";

        $ti_list = DB::select($sql); 

        $var = new TroubleTicket();
        $ticket = $var->saveTicket($request);

        $message = 'Saved';

        if($ti_list)
        {
            $ti_req = array();
            $ti_req['id_ticket'] = $ti_list[0]->id;
            $childs = array();
            $childs[] = $ticket->id;
            $ti_req['ticket_list'] = $childs;

            $sd = new TroubleTicket();
            $ticket_sd = $sd->connectTicket($ti_req,4,2);

            $message .= ' Conntected: '.$ti_list[0]->id.' - '.$ticket->id;

        }

        return response()->json(['status' => $message], 200);
    }

    public function updateTicketByData(Request $data)
    {
        /*
        trigger_type
        start_date
        source_name
        description
        */

        $req_data = TroubleTicketTrigger::select('*')->where('trigger_name', $data['trigger_type'])->first();

        if($req_data['network_type_from'] == 2)
        {
            $network_type_desc = NetworkHardware::
                select('network_type')
                ->where('source_name', $data['source_name'])
                ->first();
            
            if(!$network_type_desc['network_type'])
                return response()->json(['status' => 'Network type is not founded'], 500);
            else 
                $network_type = $network_type_desc['network_type'];
            
        }
        else 
        {
            $network_type = $req_data['network_type'];
        }

        if($req_data['kato_from'] == 2)
        {
            $settlement_desc = NetworkHardware::
                join('settlements', 'settlements.id', '=', 'adm_network_hardware.settlement_id')
                ->select(DB::raw("settlements.id, CONCAT(settlements.name_ru,' (',settlements.bdd,')') AS label, settlements.city_type"))
                ->where('adm_network_hardware.source_name', $data['source_name'])
                ->first();
            
            if(!$settlement_desc['id'])
                return response()->json(['status' => 'Settlement is not founded'], 500);
            
        }
        
        $request = array(); 
        
        $request['id_act'] = $req_data['action_id'];
        $request['id_region'] = 1;
        $request['tt_type'] = $req_data['tt_type'];
        $request['status'] = 1;
        $request['network_type'] = $network_type;
        $request['start_date'] = $data['start_date'];
        $request['source_name'] = $data['source_name'];
        $request['description'] = $data['description']; 
        $request['probable_cause'] = $req_data['prob_cause'];
        $request['down_site_2g'] = 0;
        $request['down_site_3g'] = 0;
        $request['down_site_4g'] = 0;
        $request['id_service'] = $req_data['service'];
        $request['id_influence'] = $req_data['service_influence'];
        $request['affection'] = $req_data['affection'];
        $request['influence'] = $req_data['influence'];
        $request['inform_type'] = 1;
        $request['created_by'] = 4;
        $request['user_id'] = 4;

        if($req_data['kato_from'] == 2)
        {
            $settlement_desc = NetworkHardware::
                join('settlements', 'settlements.id', '=', 'adm_network_hardware.settlement_id')
                ->select(DB::raw("settlements.id, CONCAT(settlements.name_ru,' (',settlements.bdd,')') AS label, settlements.city_type"))
                ->where('adm_network_hardware.source_name', $data['source_name'])
                ->first();
            
            if(!$settlement_desc['id'])
                return response()->json(['status' => 'Settlement is not founded'], 500);
            
        }

        $priority = ServicePriorities::
            select('service_priorities.id_priority')
            ->where('id_service', $request['id_service'])
            ->where('id_influence', $request['id_influence'])
            ->where('id_city_type', $settlement_desc['city_type'])
            ->first();

        $request['priority'] = $priority['id_priority'];

        $request['service_type'] = array();

        $req = array();
        $req['id_service'] = $request['id_service'];
        $req['id_influence'] = $request['id_influence'];
        $req['start_date'] = $request['start_date']; 
        $req['created_by'] = 1;
        $req['alarms'] = array();

        $req_t = array();
        $req_t[] = $req;
        $request['service_type'] = $req_t;
        $request['old_service_type'] = $req_t;

        $request['region'] = array();
        
        $reqr = array();
        $reqr['id'] = $settlement_desc['id'];
        $reqr['label'] = $settlement_desc['label'];
        $reqr_t =array();
        $reqr_t[] = $reqr;
        $request['region'] = $reqr_t;
        $request['old_region'] = $reqr_t;

        $request = new Request($request);

        $var = new TroubleTicket();
        $ticket = $var->saveTicket($request);

        $message = 'Saved';

        $sql = "select tt.id  
                from trouble_tickets tt 
                left join scheme_actions sa on sa.id = tt.id_act 
                where sa.status_id not in (5,6,7) and tt.created_by = 4 and tt.source_name = '".$data['source_name']."'";

        $ti_list = DB::select($sql); 

        if($ti_list[0])
        {
            $ti_req = array();
            $ti_req['id_ticket'] = $ti_list[0]['id'];
            $childs = array();
            $childs[] = $ticket->id;
            $ti_req['ticket_list'] = $childs;

            $sd = new TroubleTicket();
            $ticket_sd = $sd->connectTicket($ti_req,4,2);

            $message .= ' Conntected: '.$ti_list[0]['id'].' - '.$ticket->id;

        }

        return response()->json(['status' => $message], 200);
    }

    public function createTicketTrigger()
    {
        $this->updateSubtypeOss();

        $this->checkMainsFailure();

        $this->checkDoorOpenFailure();

        $this->updateMainsFailureToIncident();

        $this->checkOutOfServiceSite();

        $this->setCeaseDateForTicket();

        $this->closeTicketTrigger();

        $this->connectTtByTech();

        $this->connectTtByParent();

        return 'ok';
    }

    function updateSubtypeOss() // need for update subtype 2 to 1
    {
        $sql = "update mon_alarms set id_subtype = 1, is_group = 1 
                where CONCAT(technology,' ', date_raised,' ',source_name) in (
                select 
                    CONCAT(q2.technology,' ', q2.date_raised,' ',q2.source_name)
                from 
                (
                    select q.technology,
                            q.source_name,
                            q.date_raised,
                            count(q.id) cnt1 
                    from mon_alarms q 
                    where q.is_active = 1 and q.id_subtype = 2 and q.id_trouble is null
                    group by q.technology, q.source_name, q.date_raised 
                ) q2 
                where q2.cnt1 > 1 
                order by q2.source_name
                ) 
                and is_active = 1 and id_subtype = 2 and id_trouble is null";

        DB::update($sql);
    }

    function checkMainsFailure()
    {
        //получаю все алармы по питанию на которые не открыт тикет 

        $var = new TroubleTicketTrigger();
        $request = $var->MainsProblem();

        $sql = "select a.technology, 
                    a.id,
                    case 
                        when a.technology = '4G' then substring(a.source_name,6,5) 
                        when a.technology = '3G' then substring(a.source_name,1,5)
                        when a.technology = '2G' then substring(a.source_name,1,5)
                    end as id_site, 
                    a.source_name,
                    a.id_subtype,
                    a.date_raised,
                    a.fault_name,
                    0 id_trouble2 
                from mon_alarms as a 	
                where a.is_active = 1 and a.id_subtype = 5 and a.id_trouble is null";

        $data = DB::select($sql);

        $result = $this->sendData2($data);

        return 'ok';
    }

    function checkDoorOpenFailure()
    {
        //получаю все алармы по питанию на которые не открыт тикет 

        $var = new TroubleTicketTrigger();
        $request = $var->DoorOpenProblem();

        $sql = "select a.technology, 
                    a.id,
                    case 
                        when a.technology = '4G' then substring(a.source_name,6,5) 
                        when a.technology = '3G' then substring(a.source_name,1,5)
                        when a.technology = '2G' then substring(a.source_name,1,5)
                    end as id_site, 
                    a.source_name,
                    a.id_subtype,
                    a.date_raised,
                    a.fault_name,
                    0 id_trouble2 
                from mon_alarms as a 	
                where a.is_active = 1 and a.id_subtype = 6 and a.id_trouble is null";

        $data = DB::select($sql);

        $result = $this->sendData2($data);

        return 'ok';
    }

    function checkOutOfServiceSite()
    {

        //получаю все алармы по инцидентам на которые не открыт тикет 

        $var = new TroubleTicketTrigger();
        $request = $var->OutOfServiceProblem();
        
        $sql = "select  a.technology, 
                    a.id,
                    case 
                        when a.technology = '4G' then substring(a.source_name,6,5) 
                        when a.technology = '3G' then substring(a.source_name,1,5)
                        when a.technology = '2G' then substring(a.source_name,1,5)
                    end as id_site, 
                    a.source_name,
                    a.id_subtype,
                    a.date_raised,
                    a.fault_name,
                    0 id_trouble2
                from mon_alarms a 
                where a.is_active = 1 and a.id_subtype = 1 and a.id_trouble is null";

        $data = DB::select($sql);

        $result = $this->sendData2($data);

        return 'ok';
    }

    function updateMainsFailureToIncident()
    {

        //получаю все алармы по инцидентам на которые не открыт тикет 

        $var = new TroubleTicketTrigger();
        $request = $var->OutOfServiceProblemByMains();
        
        $sql = "select distinct q.technology,
                        q.id,
                        q.id_site,
                        q.source_name,
                        q.id_subtype,
                        q.date_raised,
                        q.fault_name,
                        a.id_trouble id_trouble2
                from (
                    select  a.technology, 
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
                        from mon_alarms a 
                        where a.is_active = 1 and a.id_subtype = 1 and a.id_trouble is null
                ) q 
                left join (
                    select a.technology, 
                            a.id,
                            case 
                                when a.technology = '4G' then substring(a.source_name,6,5) 
                                when a.technology = '3G' then substring(a.source_name,1,5)
                                when a.technology = '2G' then substring(a.source_name,1,5)
                            end as id_site, 
                            a.source_name,
                            a.id_subtype,
                            a.date_raised,
                            a.fault_name, 
                            a.id_trouble 
                    from mon_alarms a 
                    where a.is_active = 1 and a.id_subtype = 5 and a.id_trouble is not null
                ) a on q.id_site = a.id_site 
                where a.id_trouble is not null";
        $data = DB::select($sql);

        $result = $this->sendData2($data, 2);

        return 'ok';
    }

    public function setCeaseDateForTicket()
    {
        /*
        $sql = "update trouble_ticket_alarms as a,
                    (
                        select tt.id, tta.id_alarm, tta.date_raised, ma.date_cleared 
                        from trouble_tickets tt 
                        left join trouble_ticket_alarms tta on tta.id_tts = tt.id 
                        left join scheme_actions sa on sa.id = tt.id_act 
                        left join mon_alarms ma on ma.id = tta.id_alarm 
                        where sa.status_id = 1 and ma.is_active = 0
                    ) as b
                set a.date_cleared = b.date_cleared 
                WHERE a.id_alarm = b.id_alarm";
        */

        $sql = "update trouble_ticket_alarms
                set date_cleared = b.date_cleared
                from (
                    select tt.id, tta.id_alarm, tta.date_raised, ma.date_cleared 
                    from trouble_tickets tt 
                    left join trouble_ticket_alarms tta on tta.id_tts = tt.id 
                    left join scheme_actions sa on sa.id = tt.id_act 
                    left join mon_alarms ma on ma.id = tta.id_alarm 
                    where sa.status_id not in (5,7) and ma.is_active = 0
                ) as b
                where trouble_ticket_alarms.id_alarm = b.id_alarm";

        DB::update($sql);
    }

    public function closeTicketTrigger()
    {

        $sql = "select t.* 
                from trouble_ticket_alarms t 
                where t.id_tts in (
                    select q.id 
                    from (
                        select tt.id, count(tta.id_alarm) al_cnt, count(tta.date_cleared) dtc
                        from trouble_tickets tt 
                        left join trouble_ticket_alarms tta on tta.id_tts = tt.id 
                        left join scheme_actions sa on sa.id = tt.id_act 
                        where sa.status_id = 1 
                        group by tt.id
                    ) q 
                    where q.al_cnt = q.dtc
                )";
        $data = DB::select($sql);

        $closed_ticket_list = array();

        foreach($data as $raw)
        {
            if(!isset($closed_ticket_list[$raw->id_tts]))
            {
                $closed_ticket_list[$raw->id_tts] = $raw->id_tts;
                $ticket = TroubleTicket::findOrFail($raw->id_tts);

                $request = array();

                $req2 = array();

                $req2['finish_date'] = $raw->date_cleared;
                $req2['root_cause'] = $ticket->probable_cause;
                $req2 = new Request($req2);

                $req = array();
                $req[] = 'finish_date';
                $req[] = 'root_cause';

                $ticket->update($req2->only($req));

                $request['id'] = $raw->id_tts;
                $request['id_act'] = 10;
                $request['user_id'] = 4;
                $request['id_ticket'] = $raw->id_tts;
                $request['id_subticket'] = 0;
                $request['action_type'] = 1;
                $request['act_title'] = "Закрыть";
                $request['comment'] = "Auto closed";
                $request['created_by'] = 4;

                $request = new Request($request);

                $var = new TroubleTicket();
                $result = $var->updateTicketAction($request);
            }
        }

        return 'ok';
    }

    public function connectTtByTech()
    {

        $sql = "select 
                    case 
                        when substring(tt.source_name,1,5)  = 'ERBS_' then substring(tt.source_name,6,5) 
                        when substring(tt.source_name,1,5)  <> 'ERBS_' then substring(tt.source_name,1,5)
                    end as id_site,
                    tt.* 
                from trouble_tickets tt 
                left join scheme_actions sa on sa.id = tt.id_act 
                where sa.status_id = 1 and tt.tt_type = 2 and tt.created_by = 4";

        $data = DB::select($sql);       
        
        $user_id = 4;

        $list_ticket = array();
        $list_parents = array();
        
        foreach ($data as $item) {

            if(!isset($list_ticket[$item->id_site]))
            {
                $list_ticket[$item->id_site]['id'] = $item->id;
                $list_ticket[$item->id_site]['id_site'] = $item->id_site;
                $list_ticket[$item->id_site]['childs'] = array();
            }
            else 
            {
                $list_ticket[$item->id_site]['childs'][] = $item->id;
            }
        }
        
        foreach($list_ticket as $l)
        {
            if(count($l['childs']) > 0)
            {
                $request = array();
                $request['id_ticket'] = $l['id'];
                $request['ticket_list'] = $l['childs'];

                $var = new TroubleTicket();
                $ticket = $var->connectTicket($request,$user_id);
            }
        }
    }

    public function connectTtByParent()
    {
        // получаю список всех открытых инцидент тикетов
        // проверяю на соседей в топологии 
        // если его отец лежит тогда добавляю к нему 

        $sql = "select p.id_site_main_parent, p.id_site_parent, q.* from (
                    select 
                        case 
                            when substring(tt.source_name,1,5)  = 'ERBS_' then substring(tt.source_name,6,5) 
                            when substring(tt.source_name,1,5)  <> 'ERBS_' then substring(tt.source_name,1,5)
                        end as id_site,
                        tt.* 
                    from trouble_tickets tt 
                    left join scheme_actions sa on sa.id = tt.id_act 
                    where status_id = 1 and tt.tt_type = 2 and tt.created_by = 4
                ) q 
                left join adm_site_hop_parents p on p.id_site_base = q.id_site 
                where p.is_active = 1";

        $data = DB::select($sql);       
        
        $user_id = 4;

        $list_ticket = array();
        $list_parents = array();
        
        foreach ($data as $item) 
        {
            foreach ($data as $item2) {
                if($item->id_site_parent == $item2->id_site)
                {

                    if(!isset($list_parents[$item2->id]))
                    {
                        $list_parents[$item2->id] = array();
                        $list_parents[$item2->id]['id'] = 0;
                        $list_parents[$item2->id]['id_site'] = null;
                        $parent = $item2->id;
                        $parent_id_site = $item2->id_site;
                    }
                    else
                    {
                        if($list_parents[$item2->id]['id'] != 0)
                        {
                            $parent = $list_parents[$item2->id]['id'];
                            $parent_id_site = $list_parents[$item2->id]['id_site'];
                        }
                        else 
                        {
                            $parent = $item2->id;
                            $parent_id_site = $item2->id_site;
                        }
                    }

                    $list_parents[$item->id]['id'] = $parent;
                    $list_parents[$item->id]['id_site'] = $parent_id_site;

                    if(!isset($list_ticket[$parent]))
                    {
                        $list_ticket[$parent]['id'] = $parent;
                        $list_ticket[$parent]['id_site'] = $parent_id_site;
                        $list_ticket[$parent]['childs'] = array();
                        
                    }

                    $list_ticket[$parent]['childs'][] = $item->id;

                    if(isset($list_ticket[$item->id]))
                    {
                        foreach($list_ticket[$item->id]['childs'] as $l)
                        {
                            $list_ticket[$parent]['childs'][] = $l;

                            $list_parents[$l]['id'] = $parent;
                            $list_parents[$l]['id_site'] = $parent_id_site;
                        }

                        unset($list_ticket[$item->id]);
                    }
                }
            }
        }
        
        foreach($list_ticket as $l)
        {
            $request = array();
            $request['id_ticket'] = $l['id'];
            $request['ticket_list'] = $l['childs'];

            $var = new TroubleTicket();
            $ticket = $var->connectTicket($request,$user_id);
        }
    }

    // for save ticket
    function sendData($data,$request2,$type = 1)
    {
        foreach($data as $raw)
        {

            $request = array();
            $request = $request2;

            $priority = ServicePriorities::
                select('service_priorities.id_priority')
                ->where('id_service', $request['id_service'])
                ->where('id_influence', $request['id_influence'])
                ->where('id_city_type', 2)
                ->first();

            $request['priority'] = $priority['id_priority'];
            $request['source_name'] = $raw->source_name;
            $request['start_date'] = $raw->date_raised; 
            $request['description'] = $raw->fault_name;    

            $request['service_type'] = array();

            $req = array();
            $req['id_service'] = $request['id_service'];
            $req['id_influence'] = $request['id_influence'];
            $req['start_date'] = $raw->date_raised; 
            $req['created_by'] = 1;
            $req['alarms'] = array();

            $reqa = array();
            $reqa['id'] = $raw->id; 
            $reqa['id_subtype'] = $raw->id_subtype; 
            $reqa['source_name'] = $raw->source_name; 
            $reqa['fault_name'] = $raw->fault_name; 
            $reqa['date_raised'] = $raw->date_raised; 

            $req['alarms'][] = $reqa;
            $req_t = array();
            $req_t[] = $req;
            $request['service_type'] = $req_t;
            $request['old_service_type'] = $req_t;

            $request['region'] = array();

            $reqr = array();
            $reqr['id'] = 4067;
            $reqr['label'] = "г.Алматы (Almaty)";
            $reqr_t =array();
            $reqr_t[] = $reqr;
            $request['region'] = $reqr_t;
            $request['old_region'] = $reqr_t;

            $request['user_id'] = 4;
            
            $request = new Request($request);

            $var = new TroubleTicket();
            if($type == 1)
            {
                $ticket = $var->saveTicket($request);
                if($raw->id_subtype == 2)
                {
                    DB::table('mon_alarms')
                    ->where('source_name', $raw->source_name)
                    ->where('id_subtype', 2)
                    ->update(['id_trouble' => $ticket->id]);
                }
            }
            if($type == 2)
            {
                $request['id'] = $raw->id_trouble2;
                $ticket = $var->updateTicket($request);
            }
            

        }
    }

    function sendData2($data, $type = 1, $ss = 0)
    {
        $site_id_list = array();
        foreach($data as $raw)
        {
            if(!isset($site_id_list[$raw->id_site]))
            {
                $site_id_list[$raw->id_site] = array();
                $site_id_list[$raw->id_site]['id_site'] = $raw->id_site;
                $site_id_list[$raw->id_site]['alarms'] = array();
            }

            $site_id_list[$raw->id_site]['alarms'][] = get_object_vars($raw);
        }

        foreach($site_id_list as $ls)
        {
            $list = $this->getMainInfo($ls['alarms'],$ls['alarms'][0]['id_trouble2'],$type);

            $request = $this->generateRequest($list, $ls['alarms'][0]['technology'], $ls['alarms'][0]['id_subtype'], $type);
            
            $result = $this->completeAction($request, $ls['alarms'][0]['id_subtype'], $ls['alarms'][0]['id_trouble2'], $type);
        }
    }

    function getMainInfo($alarms, $id_trouble, $type)
    {
        $var = new TroubleTicket();
        if($type == 2)
        {
            $sql = "select a.technology, 
                        a.id,
                        case 
                            when a.technology = '4G' then substring(a.source_name,6,5) 
                            when a.technology = '3G' then substring(a.source_name,1,5)
                            when a.technology = '2G' then substring(a.source_name,1,5)
                        end as id_site, 
                        a.source_name,
                        a.id_subtype,
                        a.date_raised,
                        a.fault_name,
                        tta.is_source 
                    from mon_alarms as a 	
                    left join trouble_ticket_alarms tta on tta.id_alarm = a.id
                    where a.id_trouble =".$id_trouble;

            $data = DB::select($sql);

            $alarm_list = array();
            foreach($data as $raw)
            {
                $alarm_list[] = get_object_vars($raw);
            }

            $result = array_merge($alarm_list, $alarms);

            $list = $var->autoCreateTicketByAlarm($result);
        }
        else
        {
            $alarms[0]['is_source'] = 1;
            $list = $var->autoCreateTicketByAlarm($alarms);
        }

        return $list;
    }

    function generateRequest($list, $main_technology, $main_subtype, $type)
    {
        $request = array();
        $request = $list;

        $request['priority'] = $request['id_priority'];  

        $request['id_act'] = 1;
        $request['id_region'] = 1;
        $request['status'] = 1;  // + 
        $request['created_by'] = 4;
        $request['user_id'] = 4;
        $request['inform_type'] = 1;

        $request['old_service_type'] = $request['service_type'];
        $request['old_region'] = $request['region'];


        $var = new TroubleTicketTrigger();
        $trigger_params = $var->GetTriggerParameters($main_technology,$main_subtype,$type);

        $request['network_type'] = $trigger_params['network_type']; 
        $request['probable_cause'] = $trigger_params['probable_cause'];

        if($type == 2)
        {
            $request['network_list']['id'] = 6;
            $request['network_list']['network'] = '11-1';
            $request['network_list']['label'] = '1';
            $request['prob_cause_list']['id'] = 222;
            $request['prob_cause_list']['label'] = '222';
        }
        
        $request = new Request($request);

        return $request;
    }

    function completeAction($request, $subtype, $id_trouble, $type)
    {
        $var = new TroubleTicket();
        if($type == 1)
        {
            $ticket = $var->saveTicket($request);
            if($subtype*1 == 2)
            {
                DB::table('mon_alarms')
                ->where('source_name', $request['source_name'])
                ->where('id_subtype', 2)
                ->where('is_active', 1)
                ->update(['id_trouble' => $ticket->id]);
            }
        }
        if($type == 2)
        {
            $request['id'] = $id_trouble;
            
            $ticket = $var->updateTicket($request);
        }

        return $ticket;
    }

    

    public function getTest()
    {
        $request = array();

        $request['id_act'] = 1;
        $request['id_region'] = 1;
        $request['tt_type'] = 1;  //  FOR Event 
        $request['status'] = 1;  // + 
        $request['network_type']['id'] = 6; // FOR Event mains failure
        $request['interruption'] = null;  //
        $request['affection'] = 2;  
        $request['influence'] = 4;
        $request['probable_cause']['id'] = 222;  // 
        $request['description'] = "test";         

        $request['region'] = array();
        $reqr = array();
        $reqr['id'] = 4067;
        $reqr['label'] = "г.Алматы (Almaty)";

        $request['region'][] = $reqr;


        $sql = 'select * from mon_alarms as s ';	
        $sql .= 'where s.is_active = 1 and s.id_subtype = 5';
        $data = DB::select($sql);

        foreach($data as $raw)
        {
            $priority = ServicePriorities::
                select('service_priorities.id_priority')
                ->where('id_service', 111)
                ->where('id_influence', 82)
                ->where('id_city_type', 1)
                ->first();

            $request['priority'] = $priority['id_priority'];

            $request['source_name'] = $raw->source_name;
            $request['start_date'] = date('d.m.Y', strtotime($raw->date_raised));
            $request['start_time'] = date('H:i', strtotime($raw->date_raised));
            $request['description'] = $raw->fault_name;    

            $request['service_type'] = array();

            $req = array();
            $req['id_service'] = 111;
            $req['id_influence'] = 82; // NEED CALCULATE FOR COUNT DOWN SITE 
            $req['start_date'] = date('d.m.Y', strtotime($raw->date_raised));
            $req['start_time'] = date('H:i', strtotime($raw->date_raised));
            $req['created_by'] = 1;
            
            $req['alarms'] = array();

            $reqa['id'] = $raw->id; 
            $reqa['id_subtype'] = $raw->id_subtype; 
            $reqa['source_name'] = $raw->source_name; 
            $reqa['fault_name'] = $raw->fault_name; 
            $reqa['date_raised'] = $raw->date_raised; 

            $req['alarms'][] = $reqa;

            $request['service_type'][] = $req;
            
            $request = new Request($request);

            $ctrl = new \App\Http\Controllers\TroubleTicketController();
            $ctrl->createTicket($request);
        }

        return 'ok';


        /*
            trouble_main
                'id_act', 
                'id_region',
                'priority',
                'tt_type',
                'status',
                'network_type',
                'source_name',
                'interruption',
                'affection',
                'influence',
                'probable_cause',
                'start_date',
                'description'


            service_type
            'id_ticket' => $item['id_ticket'],
                'id_service' => $item['id_service'],
                'id_influence' => $item['id_influence'],
                'start_date' => $item['start_date'],
                'created_by' => $item['created_by']


                alarm
                    $item['id_ticket'], 
                    $service_id, 
                    $item2['id'], 
                    $item2['id_subtype'], 
                    $item2['source_name'], 
                    $item2['fault_name'], 
                    $item2['date_raised']

            region
            [$item['id_ticket'], $item['id'], $item['label']]


        */


    }

    public function createTtByFault()
    {
        return "Yes";

    }
}

?>