<?php

namespace App\Models\TroubleTicket;

use Carbon\Carbon;
use App\User;
use App\Models\Scheme\SchemeAction;
use App\Models\Scheme\SchemeUserList;
use App\Models\Catalog\Settlement;
use App\Models\Services\ServiceProblemCauses;
use App\Models\Services\Services;
use App\Models\Services\ServiceSubnetworks;
use App\Models\Services\ServicePriorities;
use App\Models\Monitoring\Alarms;
use App\Models\TroubleTicket\TroubleTicketService;
use App\Models\TroubleTicket\TroubleTicketCity;
use App\Models\TroubleTicket\TroubleTicketChange;
use App\Models\TroubleTicket\TroubleTicketHistory;
use App\Models\TroubleTicket\TroubleTicketSubticket;
use App\Models\TroubleTicket\TroubleTicketSubticketHistory;
use App\Models\TroubleTicket\TroubleTicketJournal;

use App\Models\UserSettings\accessSetting;

use App\Models\Notification\Notification;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Http\Request;


use Illuminate\Support\Facades\DB;

class TroubleTicket extends Model
{
    protected $table = 'trouble_tickets';

    public $fillable = [
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
        'inform_type',
        'down_site_2g',
        'down_site_3g',
        'down_site_4g',
        'id_source_settlement',
        'probable_cause',
        'root_cause',
        'start_date',
        'finish_date',
        'description',
        'created_by'
    ];

    // inform_type:  1 - for mobility; 2 - for service 

    // TODO need to optimize WITH load only when needed
    //protected $with = [ 'network', 'prob_cause', 'service_main_list' ];

    protected $appends = [
        'formatted_created_date',
        'formatted_start_date',
        'formatted_finish_date',
        'network_main_label', 
        'network_list',
        'prob_cause_list',
        'root_cause_list',
        //'service_list',
        'service_category', // get by source_name from adm_sites
        'site_info',
        'change_list',
        'created_user',
        'source_city',
        'tt_type_name',
        'priority_name',
        'affection_name',
        'influence_name',
        'last_action'
    ];

    // --------------------------  ATTRIBUTES -------------------------------------- //

    public function getCreatedUserAttribute() {
        return $this->user_info->name;
    }

    public function getSourceCityAttribute() {
        return $this->settlement_info->name_ru;
    }

    public function getLastActionAttribute() {
        return $this->action;
    }

    public function getTtTypeNameAttribute() {
        $tt_type_name = 'Событие';

        switch ($this->tt_type) {
            case 1:
                $tt_type_name = 'Событие';
                break;
            case 2:
                $tt_type_name = 'Инцидент';
                break;
            case 3:
                $tt_type_name = 'Проблема';
                break;
        }

        return $tt_type_name;
    }

    public function getPriorityNameAttribute() {
        $priority_name = 'Low';

        switch ($this->priority) {
            case 5:
                $priority_name = 'Low';
                break;
            case 4:
                $priority_name = 'Medium';
                break;
            case 3:
                $priority_name = 'High';
                break;
            case 2:
                $priority_name = 'Critical';
                break;
            case 1:
                $priority_name = 'Emergency';
                break;
        }

        return $priority_name;
    }

    public function getAffectionNameAttribute() {
        $affection_name = 'Нет';

        switch ($this->affection) {
            case 1:
                $affection_name = 'Нет';
                break;
            case 2:
                $affection_name = 'Да';
                break;
            case 3:
                $affection_name = 'Деградация';
                break;
        }

        return $affection_name;
    }

    public function getInfluenceNameAttribute() {
        $influence_name = 'Нет';

        switch ($this->influence) {
            case 1:
                $influence_name = 'Нет';
                break;
            case 2:
                $influence_name = 'Kcell';
                break;
            case 3:
                $influence_name = 'Activ';
                break;
            case 4:
                $influence_name = 'Все';
                break;
        }

        return $influence_name;
    }

    public function getServiceCategoryAttribute() {
        $service_category = 3;
        
        if($this->network->subnetwork_1 == 'RN' or $this->network->subnetwork_1 == 'TN')
        {
            
            if(substr($this->source_name, 0, 5) == "ERBS_")       
            {
                $source_site_id = substr($this->source_name, 5, 5);
            }
            else
            {
                $source_site_id = substr($this->source_name, 0, 5);
            }
            
            if($source_site_id > 0)
            {
                $sql = "select s.site_category from adm_sites s where s.id_site = '".$source_site_id."'";
                $site_cats = DB::select($sql);
                
                if(count($site_cats) > 0)
                {
                    $service_category = $site_cats[0]->site_category;
                }
            }
        }

        return $service_category;
    }

    public function getSiteInfoAttribute() {
        $site_info = array();
        
        if($this->network->subnetwork_1 == 'RN' or $this->network->subnetwork_1 == 'TN')
        {
            
            if(substr($this->source_name, 0, 5) == "ERBS_")       
            {
                $source_site_id = substr($this->source_name, 5, 5);
            }
            else
            {
                $source_site_id = substr($this->source_name, 0, 5);
            }
            
            if($source_site_id > 0)
            {
                $sql = "select s.lats, s.lngs from adm_sites s where s.id_site = '".$source_site_id."'";
                $s_info = DB::select($sql);
                
                if(count($s_info) > 0)
                {
                    $site_info = $s_info[0];
                }
            }
        }

        return $site_info;
    }

    public function getFormattedCreatedDateAttribute() {
        return Carbon::parse($this->created_at)->format('d.m.Y H:i');
    }

    public function getFormattedStartDateAttribute() {
        return Carbon::parse($this->start_date)->format('d.m.Y H:i');
    }

    public function getFormattedFinishDateAttribute() {
        if($this->finish_date)
        return Carbon::parse($this->finish_date)->format('d.m.Y H:i');
        else
        return '-';
    }

    public function getNetworkMainLabelAttribute(){
        $label = $this->network->subnetwork_1.': '.$this->network->subnetwork_2.': '.$this->network->subnetwork_3;
        return $label;
    }

    public function getNetworkListAttribute(){
        $network_type = []; 
        $network_type['id'] = $this->network->id;
        $network_type['network'] = $this->network->network;
        $network_type['label'] = $this->network->subnetwork_1.': '.$this->network->subnetwork_2.': '.$this->network->subnetwork_3;
        return $network_type;
    }

    public function getProbCauseListAttribute(){
        $cause_type = []; 
        $cause_type['id'] = $this->prob_cause->id;
        $cause_type['label'] = $this->prob_cause->cause_1_name.': '.$this->prob_cause->cause_2_name;
        return $cause_type;
    }

    public function getRootCauseListAttribute(){
        $cause_type = []; 

        if($this->root_cause2)
        {
            $cause_type['id'] = $this->root_cause2->id;
            $cause_type['label'] = $this->root_cause2->cause_1_name.': '.$this->root_cause2->cause_2_name;
        }
        
        return $cause_type;
    }

    public function getServiceListAttribute(){
        $list_arr = array(); 

        foreach ($this->service_main_list as &$item) {
            $list_arr[$item['id']]['id_service'] = $item['id_service'];
            $list_arr[$item['id']]['service_name'] = $item['service_info']['service_name'];
            $list_arr[$item['id']]['group_name'] = $item['service_info']['group_info']['group_name'];
            $list_arr[$item['id']]['label'] = $item['service_info']['service_name'].'('.$item['service_info']['group_info']['group_name'].')';
            $list_arr[$item['id']]['id_influence'] = $item['id_influence'];
            $list_arr[$item['id']]['start_date'] = date('d.m.Y', strtotime($item['start_date']));
            $list_arr[$item['id']]['start_time'] = date('H:i', strtotime($item['start_date']));
            $list_arr[$item['id']]['finish_date'] = null;
            $list_arr[$item['id']]['finish_time'] = null;

            $list_inf_arr = array();
            foreach($item['influence_options'] as $inf_opt)
            {
                $inf_name = $inf_opt['influence_info']['influence_condition_name'];
                $inf_group_name = $inf_opt['influence_info']['group_info']['influence_group_name'];
                $inf_trigger_name = $inf_opt['influence_info']['group_info']['trigger_name'];
                $inf_label = $inf_group_name.': '.$inf_name.' ('.$inf_trigger_name.')';
                
                $list_inf_arr[$inf_opt['id_service_influence']]['id_influence'] = $inf_opt['id_service_influence'];
                $list_inf_arr[$inf_opt['id_service_influence']]['influence_condition_name'] = $inf_name;
                $list_inf_arr[$inf_opt['id_service_influence']]['influence_group_name'] = $inf_group_name;
                $list_inf_arr[$inf_opt['id_service_influence']]['trigger_name'] = $inf_trigger_name;
                $list_inf_arr[$inf_opt['id_service_influence']]['label'] = $inf_label;
            }
            $list_inf_arr = array_values($list_inf_arr);

            $list_arr[$item['id']]['influence_options'] = $list_inf_arr;

            $list_arr[$item['id']]['alarms'] = $item['alarms_info'];
        }

        $service_list_arr = array_values($list_arr);

        return $service_list_arr;
    }

    public function getChangeListAttribute(){
        $list_arr = array();

        foreach ($this->changes_list as &$item) {
            $list_arr[$item['id_group_changes']]['id'] = $item['id_group_changes'];
            $list_arr[$item['id_group_changes']]['created_at'] = $item['formatted_created_date'];
            $list_arr[$item['id_group_changes']]['created_by'] = $item['created_user'];

            $list_arr[$item['id_group_changes']]['group_list'][$item['id']]['id'] = $item['id'];
            $list_arr[$item['id_group_changes']]['group_list'][$item['id']]['field_label'] = $item['field_label'];
            $list_arr[$item['id_group_changes']]['group_list'][$item['id']]['new_field_value'] = $item['new_field_value'];
            $list_arr[$item['id_group_changes']]['group_list'][$item['id']]['old_field_value'] = $item['old_field_value'];
        }

        rsort($list_arr);

        $list_arr = array_values($list_arr);

        return $list_arr;
    }

    public function getCityListAttribute(){
        $city_list = Settlement::
            select(DB::raw("settlements.id, CONCAT(settlements.name_ru,' (',settlements.bdd,')') AS label, settlements.city_type"))
            ->join('trouble_ticket_cities', 'trouble_ticket_cities.id_settlement', '=', 'settlements.id')
            ->where('trouble_ticket_cities.id_ticket', $this->id)
            ->orderBy('settlements.id', 'desc')->get()->toArray();

        return $city_list;
    }
    
    // -------------------------------- JOINS -------------------------- //
    public function action(){
        return $this->belongsTo(SchemeAction::class, 'id_act','id');
    }

    public function network() {
        return $this->belongsTo(ServiceSubnetworks::class, 'network_type','id');
    }

    public function prob_cause(){
        return $this->belongsTo(ServiceProblemCauses::class, 'probable_cause');
    }

    public function root_cause2(){
        return $this->belongsTo(ServiceProblemCauses::class, 'root_cause');
    }

    public function service_main_list(){
        
        return $this->hasMany(TroubleTicketService::class, 'id_ticket');
    }

    public function changes_list(){
        
        return $this->hasMany(TroubleTicketChange::class, 'id_ticket');
    }

    public function user_info() {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function settlement_info() {
        return $this->belongsTo(Settlement::class, 'id_source_settlement');
    }
    
    // ACTIONS  - INSERT UPDATE
    public function saveTicket($request){


        $ticket = TroubleTicket::create($request->only([
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
            'inform_type',
            'down_site_2g',
            'down_site_3g',
            'down_site_4g',
            'probable_cause',
            'start_date',
            'description',
            'created_by'
        ]));

        $id_source_settlement = null;
        $source_site_id = null;

        

        foreach ($request['service_type'] as $item) {
            $item['id_ticket'] = $ticket->id;

            $service_id = DB::table('trouble_ticket_services')->insertGetId([
                'id_ticket' => $item['id_ticket'],
                'id_service' => $item['id_service'],
                'id_influence' => $item['id_influence'],
                'start_date' => $item['start_date'],
                'created_by' => $request['created_by']
            ]);

            foreach ($item['alarms'] as $item2) {
                $is_source = 0;
                if($request['alarm_source_id'] == $item2['id'])
                {
                    $is_source = 1;
                }

                $alarm_id = DB::table('trouble_ticket_alarms')->insertGetId([
                    'id_tts' => $item['id_ticket'],
                    'id_service' => $service_id,
                    'id_alarm' => $item2['id'],
                    'id_alarm_subtype' => $item2['id_subtype'],
                    'source_name' => $item2['source_name'],
                    'fault_name' => $item2['fault_name'],
                    'date_raised' => $item2['date_raised'],
                    'is_source' => $is_source,
                    'created_at' => now()
                ]);

                DB::table('mon_alarms')
                    ->where('id', $item2['id'])
                    ->update(['id_trouble' => $item['id_ticket']]);
            }
        }


        foreach ($request['region'] as $item) {
            $item['id_ticket'] = $ticket->id;

            $city_id = DB::table('trouble_ticket_cities')->insertGetId([
                'id_ticket' => $item['id_ticket'],
                'id_settlement' => $item['id'],
                'city_name' => $item['label']
            ]);

            $id_source_settlement = $item['id'];
        }

        $settlement_id = $this->get_settlement_by_source($request['source_name'], $id_source_settlement);

        $ticket->id_source_settlement = $settlement_id;
        $ticket->save();

        $this->check_source_name_for_inform($ticket);

        return $ticket;
    }

    public function updateTicket($request){

        $var = new TroubleTicket();
        $ticket = $var->getTicket($request['id']);

        $field_update = [];

        if($ticket->tt_type != $request['tt_type']){ $field_update[] = 'tt_type'; }
        if($ticket->priority != $request['priority']){ $field_update[] = 'priority'; }
        if($ticket->network->id != $request['network_type']){ $field_update[] = 'network_type'; }
        if($ticket->source_name != $request['source_name']){ $field_update[] = 'source_name'; }
        if($ticket->affection != $request['affection']){ $field_update[] = 'affection'; }
        if($ticket->influence != $request['influence']){ $field_update[] = 'influence'; }
        if($ticket->prob_cause->id != $request['probable_cause']){ $field_update[] = 'probable_cause'; }
        if($ticket->root_cause != $request['root_cause']){ $field_update[] = 'root_cause'; }
        if($ticket->down_site_2g != $request['down_site_2g']){ $field_update[] = 'down_site_2g'; }
        if($ticket->down_site_3g != $request['down_site_3g']){ $field_update[] = 'down_site_3g'; }
        if($ticket->down_site_4g != $request['down_site_4g']){ $field_update[] = 'down_site_4g'; }
        if(date('Y-m-d', strtotime($ticket->start_date)) != date('Y-m-d', strtotime($request['start_date']))){ $field_update[] = 'start_date'; }
        if(date('Y-m-d H:i', strtotime($ticket->finish_date)) != date('Y-m-d H:i', strtotime($request['finish_date']))){ $field_update[] = 'finish_date'; }
        if($ticket->description != $request['description']){ $field_update[] = 'description'; }

        if(count($request['service_type']) != count($ticket['service_list'] ))
        {
            $field_update[] = 'service_type';
        }
        else
        {
            foreach($request['service_type'] as $sr_new)
            {
                $sr_changed= 0;
                foreach($ticket['service_list'] as $sr_old)
                {
                    if($sr_new['id_service'] == $sr_old['id_service'])
                        if(count($sr_new['alarms']) == count($sr_old['alarms']))
                            $sr_changed = 1;
                }

                if($sr_changed == 0)
                {
                    $field_update[] = 'service_type';
                    break;
                }
            }
        }
        
        if(!$this->identical_values( $request['region'] , $ticket['city_list'] ))
        {
            $field_update[] = 'region';
        }
        

        if($field_update)
        {
            $this->ticket_changed($field_update,$ticket,$request,$ticket->id,$request['user_id']);

            $ticket->update($request->only($field_update));
        }

        if (in_array("service_type", $field_update)) 
        {
            DB::table('trouble_ticket_alarms')->where('id_tts', $ticket->id)->delete();
            DB::table('trouble_ticket_services')->where('id_ticket', $ticket->id)->delete();

            foreach ($request['service_type'] as $item) {
                $item['id_ticket'] = $ticket->id;

                $service_id = DB::table('trouble_ticket_services')->insertGetId([
                    'id_ticket' => $item['id_ticket'],
                    'id_service' => $item['id_service'],
                    'id_influence' => $item['id_influence'],
                    'start_date' => $item['start_date'],
                    'created_by' => $request['created_by']
                ]);

                foreach ($item['alarms'] as $item2) {
                    $is_source = 0;
                    if($request['alarm_source_id'] == $item2['id'])
                    {
                        $is_source = 1;
                    }

                    if(!isset($item2['id_alarm_subtype']))
                    {
                        $alarm_id = $item2['id'];
                        $alarm_subtype = $item2['id_subtype'];
                    }
                    else 
                    {
                        $alarm_id = $item2['id_alarm'];
                        $alarm_subtype = $item2['id_alarm_subtype'];
                    }

                    $alarm_id = DB::table('trouble_ticket_alarms')->insertGetId([
                        'id_tts' => $item['id_ticket'],
                        'id_service' => $service_id,
                        'id_alarm' => $alarm_id,
                        'id_alarm_subtype' => $alarm_subtype,
                        'source_name' => $item2['source_name'],
                        'fault_name' => $item2['fault_name'],
                        'date_raised' => $item2['date_raised'],
                        'is_source' => $is_source,
                        'created_at' => now()
                    ]);
    
                    DB::table('mon_alarms')
                        ->where('id', $item2['id'])
                        ->update(['id_trouble' => $item['id_ticket']]);
                }
            }
        }
        
        if(!$this->identical_values( $request['region'] , $ticket['city_list'] ))
        {
            DB::table('trouble_ticket_cities')->where('id_ticket', $ticket->id)->delete();

            foreach ($request['region'] as $item) {
                $item['id_ticket'] = $ticket->id;
                
                DB::insert('
                    insert into trouble_ticket_cities (id_ticket, id_settlement, city_name) 
                    values (?, ?, ?)', 
                    [$item['id_ticket'], $item['id'], $item['label']]
                );
            }
        }

        
        return $ticket;
    }

    public function updateTicketAction($request){

        $ticket = TroubleTicket::findOrFail($request['id']);

        $ticket = $ticket->update($request->only(['id_act']));

        $var = new TroubleTicket();

        if($ticket){
            $request['id_ticket'] = $request['id'];
            $request['id_subticket'] = 0;
            $request['action_type'] = 1;
            $request['action_name'] = $request['act_title'];
            $request['created_by'] = $request['user_id'];
            $hist = $var->saveTicketHistory($request);
        }else{
            throw new Exception("Error in saving data!");
        }

        return $ticket;
        
    }

    public function connectTicket($request,$user_id, $type = 1){
        
        $var = new TroubleTicket();
        $ticket = $var->getTicket($request['id_ticket']);

        $childs_ticket = array();

        foreach ($request['ticket_list'] as $item) {
            DB::table('trouble_tickets')
                ->where('id', $item)
                ->update(['id_par' => $request['id_ticket'], 'id_act' => 9, 'updated_at' => now()]);
            
            $var = new TroubleTicket();

            $req = array();
            $req['id_ticket'] = $item;
            $req['id_subticket'] = 0;
            $req['action_type'] = 1;
            $req['id_act'] = 9;
            $req['action_name'] = 'Другой ТТ';
            $req['comment'] = 'Тикет связан с #'.$request['id_ticket'];
            $req['created_by'] = $user_id;
            $hist = $var->saveTicketHistory($req);

            $childs_ticket[] = $item;
        }

        $var2 = new TroubleTicket();

        $req = array();
        $req['id_ticket'] = $request['id_ticket'];
        $req['id_subticket'] = 0;
        $req['action_type'] = 10;
        $req['id_act'] = null;
        $req['action_name'] = '-';
        $req['comment'] = '-';
        $req['created_by'] = $user_id;
        $hist = $var2->saveTicketHistory($req);

        if(substr($ticket->source_name, 0, 5) == "ERBS_")       
        {
            $source_site_id = substr($ticket->source_name, 5, 5);
        }
        else
        {
            $source_site_id = substr($ticket->source_name, 0, 5);
        }

        $need_update = 0;

        if($type == 1)
        {
            $sql = "select a.technology, 
                        a.id,
                        '".$source_site_id."' as id_site, 
                        a.source_name,
                        a.id_subtype,
                        a.date_raised,
                        a.fault_name,
                        false is_source
                    from mon_alarms as a 	
                    where a.id_trouble in (".implode(',',$childs_ticket).")";

            $data1 = DB::select($sql);

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
                    where a.id_trouble =".$request['id_ticket'];

            $data2 = DB::select($sql);

            $alarm_list1 = array();
            foreach($data1 as $raw)
            {
                $alarm_list1[] = get_object_vars($raw);
            }

            $alarm_list2 = array();
            foreach($data2 as $raw)
            {
                $alarm_list2[] = get_object_vars($raw);
            }

            $result = array_merge($alarm_list1, $alarm_list2);

            if(count($result) > 0)
            {
                $list = $var2->autoCreateTicketByAlarm($result);
                $need_update = 1;
            }
            else
            {
                $need_update = 0;
            }
            
        }
        elseif($type == 2) // if new ticket is actual
        {
            $var3 = new TroubleTicket();
            $ticket_new = $var3->getTicket($childs_ticket[0]);
            $need_update = 1;

            $req_ticket_new = new Request($ticket_new->toArray());
            $list = array();

            $list['tt_type'] = $req_ticket_new['tt_type'];
            $list['affection'] = $req_ticket_new['affection']; 
            $list['influence'] = $req_ticket_new['influence'];

            $list['region'] = $req_ticket_new['city_list'];
            $list['service_type'] = $req_ticket_new['service_list'];

            $list['down_site_2g'] = $req_ticket_new['down_site_2g'];
            $list['down_site_3g'] = $req_ticket_new['down_site_3g'];
            $list['down_site_4g'] = $req_ticket_new['down_site_4g'];

            $list['user_id'] = $user_id;

            $list['id_priority'] = $req_ticket_new['priority'];  

            $list['alarm_source_id'] = null;

        }
        else // if old ticket is actual
        {
            // --------
        }
        
        if($need_update == 1)
        {
            $req = new Request($ticket->toArray());

            $req['tt_type'] = $list['tt_type'];
            $req['affection'] = $list['affection']; 
            $req['influence'] = $list['influence'];

            $req['region'] = $list['region'];
            $req['service_type'] = $list['service_type'];

            $req['alarm_source_id'] = $list['alarm_source_id'];

            $req['down_site_2g'] = $list['down_site_2g'];
            $req['down_site_3g'] = $list['down_site_3g'];
            $req['down_site_4g'] = $list['down_site_4g'];

            $req['user_id'] = $user_id;

            $req['priority'] = $list['id_priority'];  

            $ticket22 = $var2->updateTicket($req);
        }
        else 
        {
            $ticket22 = $ticket;
        }
        

        return $ticket22;
    }

    public function unconnectTicket($request,$user_id){
        
        $var2 = new TroubleTicket();
        $ticket = $var2->getTicket($request['id_main_ticket']);

        DB::table('trouble_tickets')
            ->where('id', $request['id_ticket'])
            ->update(['id_par' => null, 'id_act' => 1, 'updated_at' => now()]);
        
        $req = array();
        $req['id_ticket'] = $request['id_main_ticket'];
        $req['id_subticket'] = 0;
        $req['action_type'] = 11;
        $req['id_act'] = null;
        $req['action_name'] = 'Тикет #'.$request['id_ticket'];
        $req['comment'] = '-';
        $req['created_by'] = $user_id;
        $hist = $var2->saveTicketHistory($req);

        $req = array();
        $req['id_ticket'] = $request['id_ticket'];
        $req['id_subticket'] = 0;
        $req['action_type'] = 1;
        $req['id_act'] = 1;
        $req['action_name'] = 'Отвязан тикет';
        $req['comment'] = 'Тикет отвязан от #'.$request['id_main_ticket'];
        $req['created_by'] = $user_id;
        $hist = $var2->saveTicketHistory($req);

        $sql = "select a.id_alarm 
                from trouble_ticket_alarms as a 	
                where a.id_tts =".$request['id_ticket'];

        $al_list = DB::select($sql);

        $alarm_list = array();
        foreach($al_list as $raw)
        {
            $alarm_list[] = $raw->id_alarm;
        }

        DB::table('mon_alarms')
            ->whereIn('id', $alarm_list)
            ->update(['id_trouble' => $request['id_ticket']]);

        DB::table('trouble_ticket_alarms')
            ->where('id_tts', $request['id_main_ticket'])
            ->whereIn('id_alarm', $alarm_list)
            ->delete();

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
                    a.fault_name,
                    tta.is_source 
                from mon_alarms as a 	
                left join trouble_ticket_alarms tta on tta.id_alarm = a.id
                where a.id_trouble =".$request['id_main_ticket'];

        $data2 = DB::select($sql2);

        $alarm_list2 = array();
        foreach($data2 as $raw)
        {
            $alarm_list2[] = get_object_vars($raw);
        }

        $list = $var2->autoCreateTicketByAlarm($alarm_list2);

        $req = new Request($ticket->toArray());

        $req['tt_type'] = $list['tt_type'];
        $req['affection'] = $list['affection']; 
        $req['influence'] = $list['influence'];

        $req['region'] = $list['region'];
        $req['service_type'] = $list['service_type'];

        $req['alarm_source_id'] = $list['alarm_source_id'];

        $req['down_site_2g'] = $list['down_site_2g'];
        $req['down_site_3g'] = $list['down_site_3g'];
        $req['down_site_4g'] = $list['down_site_4g'];

        $req['user_id'] = $user_id;

        $req['priority'] = $list['id_priority'];  

        $ticket22 = $var2->updateTicket($req);

        return $ticket22;
    }

    public function saveTicketHistory($request){

        $action_type_name = '';

        switch ($request['action_type']) {
            case 1:
                $action_type_name =  'Выполнено действие';
            break;
            case 2:
                $action_type_name =  'Создан РТ #'.$request['id_subticket'];
            break;
            case 7:
                $action_type_name =  'Добавлена запись в журнал';
            break;
            case 8:
                $action_type_name =  'Добавлена запись в журнал РТ #'.$request['id_subticket'];
            break;
            case 9:
                $action_type_name =  'Выполнено действие РТ #'.$request['id_subticket'];
            break;
            case 10:
                $action_type_name =  'Подвязаны другие тикеты';
            break;
            case 11:
                $action_type_name =  'Отвязан тикет';
            break;
            case 12:
                $action_type_name =  'Отправлено уведомление';
            break;
        }
        
        $history = TroubleTicketHistory::create([
            'id_ticket' => $request['id_ticket'],
            'id_subticket' => $request['id_subticket'],
            'action_type' => $request['action_type'],
            'id_act' => $request['id_act'],
            'action_name' => $request['action_name'],
            'action_type_name' => $action_type_name,
            'comment' => $request['comment'],
            'created_by' => $request['created_by'],
        ]);

        return $history;
    }

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
                case "tt_type":
                    $field_type = 1;
                    $field_label = 'Тип тикета';
                    $old_field_val_id = $old_value[$f];
                    $new_field_val_id = $new_value[$f];

                    switch ($old_value[$f]) {
                        case 1:
                            $old_field_val = 'Event';
                        break;
                        case 2:
                            $old_field_val = 'Incident';
                        break;
                    }

                    switch ($new_value[$f]) {
                        case 1:
                            $new_field_val = 'Event';
                        break;
                        case 2:
                            $new_field_val = 'Incident';
                        break;
                    }
                break;
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

                case "down_site_2g":
                    $field_type = 1;
                    $field_label = 'Вне сервиса 2G';
                break;
                case "down_site_3g":
                    $field_type = 1;
                    $field_label = 'Вне сервиса 3G';
                break;
                case "down_site_4g":
                    $field_type = 1;
                    $field_label = 'Вне сервиса 4G';
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
                case "root_cause":
                    $field_type = 3;
                    $field_label = 'Корн. причина';
                    $f = 'root_cause_list';

                    if(isset($old_value[$f]['id']))
                    {
                        $old_field_val_id = $old_value[$f]['id'];
                        $old_field_val = $old_value[$f]['label'];
                    }

                    $new_field_val_id = $new_value[$f]['id'];
                    $new_field_val = $new_value[$f]['label'];
                break;
                
                case "service_type":
                    $field_type = 4;
                    $field_label = 'Сервисы';

                    $sa_val = '';
                    foreach($old_value['service_list'] as $s)
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
                    foreach($old_value['city_list'] as $s)
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

    // ACTIONS  - GET
    public function getTicket($id){
        $ticket = TroubleTicket::
            join('scheme_actions', 'scheme_actions.id', '=', 'trouble_tickets.id_act')
            ->join('scheme_statuses', 'scheme_statuses.id', '=', 'scheme_actions.status_id')
            ->select('trouble_tickets.*', 
                    'scheme_actions.act_title', 
                    'scheme_actions.par_act_id',
                    'scheme_statuses.name as status_name'
                    )
            ->where('trouble_tickets.id', $id)
            ->orderBy('trouble_tickets.id', 'desc')
            ->first();

        $ticket->append('service_list')->toArray();
        $ticket->append('city_list')->toArray();

        return $ticket;
    }

    public function getTicketMyList($user_id){
        $list = TroubleTicketSubticket::
            join('scheme_actions', 'scheme_actions.id', '=', 'trouble_ticket_subtickets.id_act')
            ->join('scheme_statuses', 'scheme_statuses.id', '=', 'scheme_actions.status_id')
            ->select('trouble_ticket_subtickets.*', 'scheme_actions.act_title', 'scheme_statuses.name as status_name')
            ->where('trouble_ticket_subtickets.solver_user', $user_id)
            ->orderBy('trouble_ticket_subtickets.id', 'desc')->get();

        return $list;
    }

    public function getTicketMyGroupList($user_id){
        $var = new accessSetting();
        $acc_list = $var->userAccessSettings($user_id);

        /*
        $list = TroubleTicketSubticket::
            join('scheme_actions', 'scheme_actions.id', '=', 'trouble_ticket_subtickets.id_act')
            ->join('scheme_statuses', 'scheme_statuses.id', '=', 'scheme_actions.status_id')
            ->leftJoin('scheme_user_lists', 'scheme_user_lists.group_id', '=', 'trouble_ticket_subtickets.solver_group')
            ->select('trouble_ticket_subtickets.*', 'scheme_actions.act_title', 'scheme_statuses.name as status_name')
            ->where('scheme_user_lists.user_id', $user_id)
            ->orderBy('trouble_ticket_subtickets.id', 'desc')->get();
            */
            
        
        $sql = "select st.*, sa.act_title, ss.name as status_name 
                from trouble_ticket_subtickets st 
                left join scheme_actions sa on sa.id = st.id_act 
                left join scheme_statuses ss on ss.id = sa.status_id 
                left join scheme_user_lists su on su.group_id = st.solver_group 
                where su.user_id = ".$user_id." and (su.field_id is null or su.field_id = st.solver_cats)";

        $list = DB::select($sql);
        

        return $list;
    }

    public function getTicketServiceMyGroupList($user_id){
        $var = new accessSetting();
        $acc_list = $var->userAccessSettings($user_id);

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
                    ssa.group_id in (".implode(',',$acc_list['group']).") and 
                    sa.status_id not in (1,5,7) and 
                    s.id_region in (".implode(',',$acc_list['region']).")
                group by tt.id, tts.id_ticket, s.name_ru, u.name, ss.name, sb.network, sb.subnetwork_1, sb.subnetwork_2, sb.subnetwork_3 
                order by tt.id desc";

        $list = DB::select($sql);
        /*
        $list = TroubleTicket::
            join('scheme_actions', 'scheme_actions.id', '=', 'trouble_tickets.id_act')
            ->join('scheme_statuses', 'scheme_statuses.id', '=', 'scheme_actions.status_id')
            ->join('scheme_user_activities', 'scheme_user_activities.act_id', '=', 'scheme_actions.id')
            ->join('settlements', 'settlements.id', '=', 'trouble_tickets.id_source_settlement')
            ->select('trouble_tickets.*', 'scheme_actions.act_title', 'scheme_statuses.name as status_name', 'settlements.name_ru as settlement_name')
            ->where('trouble_tickets.status', 1)
            ->whereIn('scheme_user_activities.group_id', $acc_list['group'])
            ->whereNotIn('scheme_statuses.id', [1,5,7])  // 5 - closed; 7 - another tt
            ->whereIn('settlements.id_region', $acc_list['region'])
            ->orderBy('trouble_tickets.id', 'desc')
            ->get();
        */
        
        return $list;
    }

    public function getTicketActiveServiceList($user_id){

        $var = new accessSetting();
        $acc_list = $var->userAccessSettings($user_id);

        $sql = "select tt.*, string_agg(se.service_name, ', ') services, s.name_ru settlement_name, 
                        u.name created_user, 
                        ss.name status_name, 
                        sb.network network_label,
                        sb.subnetwork_1 || ': ' ||  sb.subnetwork_2 || ': ' || sb.subnetwork_3  subnetwork_label
                from trouble_tickets tt 
                left join scheme_actions sa on sa.id = tt.id_act 
                left join scheme_statuses ss on ss.id = sa.status_id 
                left join settlements s on s.id = tt.id_source_settlement 
                left join service_subnetworks sb on sb.id = tt.network_type 
                left join trouble_ticket_services tts on tts.id_ticket = tt.id 
                left join services se on se.id = tts.id_service  
                left join users u on u.id = tt.created_by 
                where tt.status = 1 and sa.status_id not in (5,7) and s.id_region in (".implode(',',$acc_list['region']).") 
                group by tt.id, tts.id_ticket, s.name_ru, u.name, ss.name, sb.network, sb.subnetwork_1, sb.subnetwork_2, sb.subnetwork_3 
                order by tt.id desc";

        $list = DB::select($sql);
        /*
        $list = TroubleTicket::
            join('scheme_actions', 'scheme_actions.id', '=', 'trouble_tickets.id_act')
            ->join('scheme_statuses', 'scheme_statuses.id', '=', 'scheme_actions.status_id')
            ->join('settlements', 'settlements.id', '=', 'trouble_tickets.id_source_settlement')
            ->select('trouble_tickets.*', 'scheme_actions.act_title', 'scheme_statuses.name as status_name', 'settlements.name_ru as settlement_name')
            ->where('trouble_tickets.status', 1)
            ->whereNotIn('scheme_statuses.id', [5,7])  // 5 - closed; 7 - another tt
            ->whereIn('settlements.id_region', $acc_list['region'])
            ->orderBy('trouble_tickets.id', 'desc')
            ->get();
        */
        
        return $list;
    }

    public function getTicketActiveResourceList(){
        $list = TroubleTicketSubticket::
            join('scheme_actions', 'scheme_actions.id', '=', 'trouble_ticket_subtickets.id_act')
            ->join('scheme_statuses', 'scheme_statuses.id', '=', 'scheme_actions.status_id')
            ->select('trouble_ticket_subtickets.*', 'scheme_actions.act_title', 'scheme_statuses.name as status_name')
            ->whereNotIn('scheme_statuses.id', [5,7])  // 5 - closed; 7 - another tt
            ->orderBy('trouble_ticket_subtickets.id', 'desc')
            ->get();
        
        return $list;
    }

    public function getTicketUserGroup($user_id){
        $list = SchemeUserList::where('user_id', $user_id)->get();

        $vals = '';
        foreach($list as &$item)
        {
            $vals .= $item->group_id.', ';
        }
        $vals = substr($vals, 0, -1);

        return $vals;
    }

    public function getTicketChangeHistory($id){
        $list = TroubleTicketChange::where('id_ticket', $id)
                ->orderBy('id', 'desc')
                ->take(10)
                ->get();

        return $list;
    }

    public function getTicketHistory($id){
        $list = TroubleTicketHistory::with('user_info')->where('id_ticket', $id)
                ->orderBy('id', 'desc')
                ->take(10)
                ->get();
                
        return $list;
    }

    public function getTicketSubtickets($id){
        $list = TroubleTicketSubticket::where('id_ticket', $id)
                ->orderBy('id', 'desc')
                ->take(10)
                ->get();
                
        return $list;
    }

    public function getTicketSubticketHistory($id){
        $list = TroubleTicketHistory::with('user_info')->where('id_subticket', $id)
                ->orderBy('id', 'desc')
                ->take(10)
                ->get();
                
        return $list;
    }

    public function getTicketJournals($id){
        $list = TroubleTicketJournal::with('user_info')->where('id_ticket', $id)
                ->orderBy('id', 'desc')
                ->get();
                
        return $list;
    }

    public function getTicketConnected($id){
        $list = TroubleTicket::
            join('scheme_actions', 'scheme_actions.id', '=', 'trouble_tickets.id_act')
            ->join('scheme_statuses', 'scheme_statuses.id', '=', 'scheme_actions.status_id')
            ->select('trouble_tickets.*', 'scheme_actions.act_title', 'scheme_statuses.name as status_name')
            ->where('trouble_tickets.id_par', $id)  // 5 - closed; 7 - another tt
            ->orderBy('trouble_tickets.id', 'desc')
            ->get();
                
        return $list;
    }

    public function getTicketSolverInfo($id_act,$id_user){
        $info = array();

        $info['group'] = 0;
        $info['user'] = 0;

        // if status (4,8,9) then set group id, and set user 0 
        // if status (3) then set group id, and set user {id_user}

        $list = DB::select(DB::raw("
            select a.act_id, a.group_id, t.status_id 
            from scheme_actions as t 
            left join scheme_user_activities as a on a.act_id = t.id 
            where t.id = ".$id_act));
        
        if($list[0]->group_id > 0)
        {
            $info['group'] = $list[0]->group_id;

            if($list[0]->status_id == 3)
            {
                $info['user'] = $id_user;
            }
        }
                
        return $info;
    }

    // for inform pages 
    public function getInformTicketActiveServiceList($type,$tt_type,$priority,$network_type){

        // type 
        //  1 - all (for tech dep and ccd)
        //  2 - only for ccd
        // tt_type
        //  1 - event
        //  2 - incident
        // priority
        //  6 - all
        //  1 - 5 
        // network_type
        //  0 - all 
        //  1 - telco
        //  2 - it

        $sql = "select tt.*, s.name_ru settlement_name, 
                u.name created_user, 
                ss.name status_name, 
                sb.network network_label,
                sb.subnetwork_1 || ': ' ||  sb.subnetwork_2 || ': ' || sb.subnetwork_3  subnetwork_label
        from trouble_tickets tt 
        left join scheme_actions sa on sa.id = tt.id_act 
        left join scheme_statuses ss on ss.id = sa.status_id 
        left join settlements s on s.id = tt.id_source_settlement 
        left join service_subnetworks sb on sb.id = tt.network_type 
        left join users u on u.id = tt.created_by 
        where tt.status = 1 and sa.status_id not in (5,7)";

        if($type == 2)
        {
            $sql .= " and tt.inform_type = 2";
        }

        if($tt_type > 0)
        {
            $sql .= " and tt.tt_type = ".$tt_type;
        }

        if($network_type != 'All')
        {
            $sql .= " and sb.network = '".$network_type."'";
        }

        if($priority < 6)
        {
            $sql .= " and tt.priority < ".$priority;
        }

        $sql .= " order by tt.id desc";

        $list = DB::select($sql);
        
        return $list;
    }

    public function getInformDashboard(){

        $sql1 = "select tt.tt_type, sb.network, tt.priority, count(*) cnt 
                from trouble_tickets tt 
                left join scheme_actions sa on sa.id = tt.id_act 
                left join service_subnetworks sb on sb.id = tt.network_type 
                where tt.status = 1 and sa.status_id not in (5,7)
                group by tt.tt_type, sb.network, tt.priority";
        
        $list = DB::select($sql1);

        

        $main_cnt = array();
        
        $main_cnt['Telco'] = array();
        $main_cnt['Telco'][1] = array();
        $main_cnt['Telco'][2] = array();
        $main_cnt['Telco']['cnt'] = 0;

        $main_cnt['Telco'][1][1] = 0;
        $main_cnt['Telco'][1][2] = 0;
        $main_cnt['Telco'][1][3] = 0;
        $main_cnt['Telco'][1][4] = 0;
        $main_cnt['Telco'][1][5] = 0;
        $main_cnt['Telco'][1]['cnt'] = 0;

        $main_cnt['Telco'][2][1] = 0;
        $main_cnt['Telco'][2][2] = 0;
        $main_cnt['Telco'][2][3] = 0;
        $main_cnt['Telco'][2][4] = 0;
        $main_cnt['Telco'][2][5] = 0;
        $main_cnt['Telco'][2]['cnt'] = 0;

        $main_cnt['IT'] = array();
        $main_cnt['IT'][1] = array();
        $main_cnt['IT'][2] = array();
        $main_cnt['IT']['cnt'] = 0;

        $main_cnt['IT'][1][1] = 0;
        $main_cnt['IT'][1][2] = 0;
        $main_cnt['IT'][1][3] = 0;
        $main_cnt['IT'][1][4] = 0;
        $main_cnt['IT'][1][5] = 0;
        $main_cnt['IT'][1]['cnt'] = 0;

        $main_cnt['IT'][2][1] = 0;
        $main_cnt['IT'][2][2] = 0;
        $main_cnt['IT'][2][3] = 0;
        $main_cnt['IT'][2][4] = 0;
        $main_cnt['IT'][2][5] = 0;
        $main_cnt['IT'][2]['cnt'] = 0;
        

        foreach($list as $l)
        {
            $l = get_object_vars($l);

            if(!isset($main_cnt[$l['network']]))
            {
                $main_cnt[$l['network']] = array();
                $main_cnt[$l['network']]['cnt'] = 0;
            }

            $main_cnt[$l['network']]['cnt'] += $l['cnt'];
            
            if(!isset($main_cnt[$l['network']][$l['tt_type']]))
            {
                $main_cnt[$l['network']][$l['tt_type']] = array();
                $main_cnt[$l['network']][$l['tt_type']]['cnt'] = 0;
            }

            $main_cnt[$l['network']][$l['tt_type']]['cnt'] += $l['cnt'];

            if(!isset($main_cnt[$l['network']][$l['tt_type']][$l['priority']]))
            {
                $main_cnt[$l['network']][$l['tt_type']][$l['priority']] = 0;
            }

            $main_cnt[$l['network']][$l['tt_type']][$l['priority']] += $l['cnt'];
        }

        $sql2 = "select q.site_id lll, s.lats*1 lat, s.lngs*1 lng 
                from (
                    select distinct 
                        case 
                            when substring(tta.source_name,0,6) = 'ERBS_' then substring(tta.source_name,6,5)
                            when substring(tta.source_name,0,6) != 'ERBS_' then substring(tta.source_name,0,6) 
                        end site_id 
                    from trouble_tickets tt 
                    left join scheme_actions sa on sa.id = tt.id_act 
                    left join trouble_ticket_alarms tta on tta.id_tts = tt.id and tta.id_alarm_subtype = 1 
                    where tt.status = 1 and sa.status_id not in (5,7)
                ) q 
                left join adm_sites s on s.id_site = q.site_id 
                where s.lats > 0";
        
        $list2 = DB::select($sql2);

        $data = array();
        $data['map_info'] = $list2;
        $data['main_info'] = $main_cnt;
        
        return $data;
    }

    // trigger 
    function get_settlement_by_source($source_name, $def_settlement)
    {
        if(substr($source_name, 0, 5) == "ERBS_")       
        {
            $source_site_id = substr($source_name, 5, 5);
        }
        else
        {
            $source_site_id = substr($source_name, 0, 5);
        }

        if(is_numeric($source_site_id))
        {
            $settlement_id = Settlement::
                join('adm_sites', 'adm_sites.kato', '=', 'settlements.kato')
                ->select("settlements.id")
                ->where('adm_sites.id_site', $source_site_id)
                ->first();

            if(!$settlement_id)
            {
                $settlement_id = $this->get_settlement_by_code($source_site_id);
                
                if($settlement_id == 0)
                {
                    $settlement_id = $def_settlement;
                }
            }
            else
            {
                $settlement_id = $settlement_id['id'];
            }
        }
        else 
        {
            $settlement_id = $def_settlement;
        }

        return $settlement_id;
    }

    function get_settlement_by_code($source_name){
        $w_code = 99;
        if(substr($source_name, 0, 5) == "ERBS_")       
        {
            $w_code = substr($source_name, 5, 1);
        }
        else
        {
            $w_code = substr($source_name, 0, 1);
        }

        if($w_code == 1)
        {
            if(substr($source_name, 0, 5) == "ERBS_")       
            {
                $w_code2 = substr($source_name, 5, 2);
            }
            else
            {
                $w_code2 = substr($source_name, 0, 2);
            }

            if($w_code2 == 11)
            {
                $w_code = $w_code2;
            }
        }

        $id_source_settlement =  0;
        switch ($w_code) {
            case 0:
                $id_source_settlement =  4067; // Almaty
            break;
            case 11:
                $id_source_settlement =  4066; // Astana
            break;
            case 1:
                $id_source_settlement =  1837; // North
            break;
            case 2:
                $id_source_settlement =  1837; // North
            break;
            case 3:
                $id_source_settlement =  7134; // East
            break;
            case 4:
                $id_source_settlement =  2363; // West
            break;
            case 5:
                $id_source_settlement =  5811; // West
            break;
            case 6:
                $id_source_settlement =  4068; // West
            break;
            case 7:
                $id_source_settlement =  6095; // West
            break;
            case 8:
                $id_source_settlement =  3192; // West
            break;
            case 9:
                $id_source_settlement =  4067; // Almaty Mobile Site
            break;
        }

        return $id_source_settlement;
    }

    function identical_values( $arrayA , $arrayB ) {

        sort( $arrayA );
        sort( $arrayB );
    
        return $arrayA == $arrayB;
    }

    function check_service_influence($vals)
    {
        $st = 0;

        if($vals >= 1 && $vals <= 5) $st = 82;
        else if($vals > 5 && $vals <= 20) $st = 81;
        else if($vals > 20 && $vals <= 50) $st = 80;
        else if($vals > 50 && $vals <= 100) $st = 79;
        else if($vals > 100) $st = 78;
        else $st = 82;

        return $st;
    }
    
    public function autoCreateTicketByAlarm($alarm_list)
    {

        $site_id = null;
        $source_site_id = null;

        $data = array();

        $data['tt_type'] = 1;  
        $data['affection'] = 1;  
        $data['influence'] = 4;
        $data['description'] = "";

        $data['region'] = array();
        $data['service_type'] = array();

        $data['id_service'] = 111;
        $data['id_influence'] = 82;

        $data['down_site_2g'] = 0;
        $data['down_site_3g'] = 0;
        $data['down_site_4g'] = 0;

        $data['city_type'] = 1;

        $service_list = array();

        if(count($alarm_list) > 0)
        {
            foreach($alarm_list as $a)
            {
                if(!isset($service_list[$a['technology']]))
                    $service_list[$a['technology']] = array();
                
                if(!isset($service_list['total']))
                {
                    $service_list['total'] = array();
                    $service_list['total']['down_sites_id'] = array(); 
                }
                
                if($a['technology'] == '2G')
                {
                    $service_list[$a['technology']]['tech'] = '2G';
                    $service_list[$a['technology']]['service_id'] = 111;
                    $service_list[$a['technology']]['service_id'] = 111;
                }
                if($a['technology'] == '3G')
                {
                    $service_list[$a['technology']]['tech'] = '3G';
                    $service_list[$a['technology']]['service_id'] = 113;
                }
                if($a['technology'] == '4G')
                {
                    $service_list[$a['technology']]['tech'] = '4G';
                    $service_list[$a['technology']]['service_id'] = 115;
                }

                if(!isset($service_list[$a['technology']]['alarms']))
                    $service_list[$a['technology']]['alarms'] = array();

                $service_list[$a['technology']]['alarms'][] = $a;



                if(substr($a['source_name'], 0, 5) == "ERBS_")       
                {
                    $source_site_id = substr($a['source_name'], 5, 5);
                }
                else
                {
                    $source_site_id = substr($a['source_name'], 0, 5);
                }

                if($a['id_subtype']*1 == 1 || $a['id_subtype']*1 == 2)
                {
                    if(!isset($service_list[$a['technology']]['down_sites']))
                        $service_list[$a['technology']]['down_sites'] = array();

                    $service_list[$a['technology']]['down_sites'][$a['source_name']] = $a['source_name'];

                    $service_list['total']['down_sites_id'][$source_site_id] = $source_site_id;

                    $data['tt_type'] = 2;
                    $data['affection'] = 2;
                }

                if(isset($a['is_source']))
                {
                    if($a['is_source']*1 == 1 || $a['is_source'])
                    {
                        $data['alarm_source_id'] = $a['id'];
                        $data['source_name'] = $a['source_name'];
                        $data['description'] = $a['fault_name'];
                        $data['start_date'] = $a['date_raised'];
                        $source_id = $source_site_id;

                        $settlement_id = Settlement::
                            join('adm_sites', 'adm_sites.kato', '=', 'settlements.kato')
                            ->select('settlements.id', 'settlements.city_type')
                            ->where('adm_sites.id_site', $source_site_id)
                            ->first();

                        if(!$settlement_id)
                        {
                            $data['id_source_settlement'] = $this->get_settlement_by_code($source_site_id);;
                            $data['city_type'] = 2;
                        }
                        else
                        {
                            $data['id_source_settlement'] = $settlement_id['id'];
                            $data['city_type'] = $settlement_id['city_type'];
                        }
                    }
                }
                
            }

            $req = array();
            $req['type'] = 2;
            $req['site_list'] = array();
            if(count($service_list['total']['down_sites_id']) > 0)
            {
                $req['site_list'] = $service_list['total']['down_sites_id'];
            }
            else
            {
                $req['site_list'][] = $source_id;
            }

            if(count($req['site_list']) > 0)
            {
                $settlement_list = Settlement::
                    join('adm_sites', 'adm_sites.kato', '=', 'settlements.kato')
                    ->select(DB::raw("distinct settlements.id, CONCAT(settlements.name_ru,' (',settlements.bdd,')') AS label, settlements.city_type"))
                    ->whereIn('adm_sites.id_site', $req['site_list'])
                    ->get()->toArray();

                $data['region'] = $settlement_list; 
            }

            $var = new Services();
            $list_arr = $var->getServiceOptions('site');

            $max_priority = 6;

            foreach($list_arr as $l)
            {
                foreach($service_list as $sl)
                {
                    if(isset($sl['alarms']))
                    {
                        if($l['id_service']*1 == $sl['service_id']*1)
                        {
                            $l['alarms'] = $sl['alarms'];

                            if(isset($sl['down_sites']))
                            {
                                $l['down_services'] = array_values($sl['down_sites']);

                                if($sl['tech'] == '2G') 
                                $data['down_site_2g'] = count($l['down_services']);

                                if($sl['tech'] == '3G') 
                                $data['down_site_3g'] = count($l['down_services']);

                                if($sl['tech'] == '4G') 
                                $data['down_site_4g'] = count($l['down_services']);
                            }
                            else
                            {
                                $l['down_services'] = array();;
                            }

                            $l['start_date'] = $data['start_date'];
                            $l['id_influence'] = $this->check_service_influence(count($l['down_services']));

                            $priority = ServicePriorities::
                                select('service_priorities.id_priority')
                                ->where('id_service', $l['id_service'])
                                ->where('id_influence', $l['id_influence'])
                                ->where('id_city_type', $data['city_type'])
                                ->first();

                            if($max_priority > $priority['id_priority'])
                            {
                                $max_priority = $priority['id_priority'];
                            }

                            $data['id_priority'] = $max_priority;

                            $data['service_type'][] = $l;
                        }
                    }
                    
                }
            }
        }

        return $data;

    }

    // additional inform or save in ext interface
    function check_source_name_for_inform($ticket){
        $status = 0;
        $json = null;
        if(substr($ticket->source_name, -3) == "_KP")       
        {
            $status = 1;

            $content = array(
                'data' => 
                    array(
                        'id_tt'=>$ticket->id,
                        'id_act'=>'31',
                        'id_act_bck'=>'0',
                        'start_date'=> $ticket->formatted_start_date,
                        'process'=> $ticket->tt_type_name,
                        'priority'=> $ticket->priority_name,
                        'affection'=> $ticket->affection_name,
                        'region'=> $ticket->source_city,
                        'network_type'=>'CN',
                        'source_type'=>'BSC',
                        'source_name'=> $ticket->source_name,
                        'probable_cause'=> $ticket->prob_cause_list['label'],
                        'descr'=> $ticket->description,
                        'created_by'=> $ticket->created_user,
                    )
            );
            
            $opts = array('http' =>
                array(
                    'method'  => 'POST',
                    'header'  => 'Content-type: application/x-www-form-urlencoded',
                    'content' => http_build_query($content)
                )
            );
                    
            $context  = stream_context_create($opts);
            
            $json = file_get_contents('http://sao.kcell.kz/api/CreateKazMinTicket', false, $context);

            //dd($ticket->tt_type_name);
        }

        return $json;
    }

}
