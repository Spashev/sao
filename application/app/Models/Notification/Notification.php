<?php

namespace App\Models\Notification;

use Carbon\Carbon;

use Illuminate\Database\Eloquent\Model;
use Mail;
use LaravelSmpp\SmppServiceInterface;

use App\User;
use App\Models\Notification\NotificationTrigger;

use Illuminate\Support\Facades\DB;

class Notification extends Model
{
    public $fillable = [
        'id_comp',
        'id_trigger',
        'id_user',
        'inform_type',
        'created_by'
    ];

    protected $appends = [
        'user_name',
        'inform_type_name'
    ];

    private $smpp;

    public function __construct() {
        $this->smpp = \App::make('LaravelSmpp\SmppServiceInterface');
    }

    public function getUserNameAttribute() {
        return $this->user_info->name;
    }

    public function getInformTypeNameAttribute() {
        $inform_type_name = 'Неизвестно';
        switch ($this->inform_type) {
            case 1:
                $inform_type_name = 'Только Email';
                break;
            case 2:
                $inform_type_name = 'Email/SMS';
                break;
            case 0:
                $inform_type_name = 'Неизвестно';
                break;
        }
        return $inform_type_name;
    }

    public function user_info() {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function trigger_info() {
        return $this->belongsTo(NotificationTrigger::class, 'id_trigger');
    }

    public function SendEmailTest($req){

        foreach($req['user_list'] as $email)
        {
            $req['email'] = $email;
            Mail::send('mail', $req, function($message)  use ($req) {
                $message->to($req['email']);
                $message->subject($req['subject']);
                $message->from('noc@kcell.kz','NOC');
            });
        }
    }

    public function SendSmsTest(){

        $message = "Статус: Назначен; \n";
        $message .= "Тип тикета: Incident; \n";
        $message .= "Приоритет: Critical; \n";
        $message .= "Сеть: Telco; \n";
        $message .= "Подсеть: PS Core; \n";
        $message .= "Подсеть 2: PCRF:; \n";
        $message .= "Объект: тест; \n";
        $message .= "Влияние на сервис: Да; \n";
        $message .= "Бренд: Все; \n";

        $this->smpp->setSender('NOC South');

        $this->smpp->sendBulk([77012119565], $message);
    }

    function SendSmsTest2($smpp){

        $message = 'Статус: Назначен;';
        $message .= 'Тип тикета: Incident;';
        $message .= 'Приоритет: Critical;';
        $message .= 'Сеть: Telco;';
        $message .= 'Подсеть: PS Core;';
        $message .= 'Подсеть 2: PCRF:;';
        $message .= 'Объект: тест;';
        $message .= 'Влияние на сервис: Да;';
        $message .= 'Бренд: Все;';

        $smpp->sendOne(77012119565, $message);
    }

    public function SendEmail($res,$email_list){

        $req = [
            'subject' => 'Сервис тикет #'.$res->id.' ('.$res->action->act_title.')',
            'id' => $res->id,
            'status_name' => $res->action->status->name,
            'tt_type' => $res->tt_type_name,
            'priority' => $res->priority_name,
            'network' => $res->network->network,
            'subnetwork' => $res->network_main_label,
            'source_name' => $res->source_name,
            'source_city' => $res->source_city,
            'influence' => $res->influence_name,
            'affection' => $res->affection_name,
            'out_of_service' => ' - ',
            'probable_cause' => $res->prob_cause->cause_1_name,
            'description' => $res->description,
            'start_date' => $res->formatted_start_date,
            'responsible' => $res->created_user,
            'last_action' => $res->action->act_title
        ];

        foreach($email_list as $email)
        {
            $req['email'] = $email;
            Mail::send('mail', $req, function($message)  use ($req) {
                $message->to($req['email']);
                $message->subject($req['subject']);
                $message->from('noc@kcell.kz','NOC');
            });
        }
    }

    public function SendTtNotification($res){

        $services = ""; 
        foreach($res->service_list as $sr)
        {
            $services .= $sr['service_name']."; ";
        }

        $network_type_id = 0;
        switch ($res->network->network) {
            case 'Telco':
                $network_type_id = 1;
                break;
            case 'IT':
                $network_type_id = 2;
                break;
        }

        $req = [
            'subject' => 'Сервис тикет #'.$res->id.' ('.$res->action->act_title.')',
            'id' => $res->id,
            'status_name' => $res->action->status->name,
            'tt_type' => $res->tt_type_name,
            'priority' => $res->priority_name,
            'network' => $res->network->network,
            'subnetwork' => $res->network_main_label,
            'services' => $services,
            'source_name' => $res->source_name,
            'source_city' => $res->source_city,
            'influence' => $res->influence_name,
            'affection' => $res->affection_name,
            'out_of_service' => ' - ',
            'probable_cause' => $res->prob_cause->cause_1_name,
            'description' => $res->description,
            'start_date' => $res->formatted_start_date,
            'finish_date' => $res->formatted_finish_date,
            'responsible' => $res->created_user,
            'last_action' => $res->action->act_title,
            'inform_type' => $res->inform_type,
            'status_id' => $res->action->status_id,
            'link' => 'http://esur.kcell.kz/troubleticket/'.$res->id 
        ];

        $req_sms = "TTS: #".$res->id." (".$res->action->status->name.") \n";
        $req_sms .= "Тип тикета: ".$res->tt_type_name."; \n";
        $req_sms .= "Приоритет: ".$res->priority_name."; \n";
        $req_sms .= "Сервисы: ".$services." \n";
        $req_sms .= "Сеть: ".$res->network->network."; \n";
        $req_sms .= "Подсеть: ".$res->network_main_label."; \n";

        $req_sms .= "Объект: ".$res->source_name."; \n";
        $req_sms .= "Расположение: ".$res->source_city."; \n";
        $req_sms .= "Влияние на сервис: ".$res->affection_name."; \n";
        $req_sms .= "Бренд: ".$res->influence_name."; \n";

        if($res->inform_type != 2)
        {
            $req_sms .= "Вне сервиса: \n";
            $req_sms .= " > 2G: ".$res->down_site_2g.";  \n"; 
            $req_sms .= " > 3G: ".$res->down_site_3g.";  \n";
            $req_sms .= " > 4G: ".$res->down_site_4g.";  \n";
        }

        if($res->inform_type == 2)
        {
            $req_sms .= "Описание: ".$res->description."; \n";
        }
        
        $req_sms .= "Начало: ".$res->formatted_start_date."; \n";

        if($res->formatted_finish_date)
        {
            $req_sms .= "Конец: ".$res->formatted_finish_date."; \n";
        }
        
        $req_sms .= "Регистратор: ".$res->created_user.";";

        // get id_trigger list
        // priority  $res->priority
        // tt_type   $res->tt_type
        // region    $res->id_region_settlement   
        // serv_cat  $res->service_category

            
        $sql = "select distinct s.id  
                from notification_triggers s 
                where (s.id_priority = 0 or (s.id_priority != 0 and s.id_priority >= ".$res->priority.")) and  
                (s.id_tt_type = 0 or s.id_tt_type = ".$res->tt_type.") and  
                (s.id_network = 0 or s.id_network = ".$network_type_id.") and  
                (s.id_region = 0 or s.id_region = ".$res->id_region_settlement.") and  
                (s.id_serv_cat = 0 or (s.id_serv_cat >= ".$res->service_category." and s.id_serv_cat < 3))";

        $trigger_list = DB::select($sql);

        $triggers = array();

        foreach($trigger_list as $l)
        {
            $triggers[] = $l->id;
        }

        $user_list = Notification::whereIn('id_trigger',$triggers)->get();

        $phones = array();
        $req['emails'] = array();
        foreach($user_list as $list)
        {
            //echo $list->user_info->name." > ".$list->user_info->mobile." > ".$list->user_info->email." <br/>";
            $req['emails'][] = $list->user_info->email;
            
            if($list->user_info->mobile)
            {
                $phone = str_replace("+", "", $list->user_info->mobile);

                if($phone*1 > 0)
                    $phones[] = $phone*1;
            }
        }

        if($res->id_region_settlement == 1)
        {
            $req['emails'][] = 'CN-RNFaultReport@kcell.kz';
            $req['emails'][] = 'CRD-DSDAS-DST-AMO@kcell.kz';
            $req['emails'][] = 'ICTD-IBU-IG@kcell.kz';

            $req['emails'][] = 'controlcenter-mob-almaty@inter-s.kz';
        }

        if($res->id_region_settlement == 3)
        {
            $req['emails'][] = 'FaultaffectingEricsson&ZTENorth@kcell.kz';
            $req['emails'][] = '3G_Faults@kcell.kz';

            $req['emails'][] = 'controlcenter-mob-eastnorth-z@inter-s.kz';
        }

        if($res->id_region_settlement == 2)
        {
            $req['emails'][] = 'CN-RNFaultReportSouth@kcell.kz';
            $req['emails'][] = 'ICTD-IBU-IG@kcell.kz';

            $req['emails'][] = 'controlcenter-mob-south@inter-s.kz';
        }

        if($res->id_region_settlement == 4)
        {
            $req['emails'][] = 'CN-RNFaultReportWest@kcell.kz';
            $req['emails'][] = 'ICTD-IBU-IG@kcell.kz';

            $req['emails'][] = 'controlcenter-mob-west@inter-s.kz';
        }

        if($res->id_region_settlement == 7)
        {
            $req['emails'][] = 'FaultAffectingZTEEast@kcell.kz';

            $req['emails'][] = 'controlcenter-mob-eastnorth-z@inter-s.kz';
        }

        if($res->id_region_settlement == 8)
        {
            $req['emails'][] = 'FaultaffectingEricsson&ZTENorth@kcell.kz';

            $req['emails'][] = 'controlcenter-mob-eastnorth-z@inter-s.kz';
        }

        if($res->id_region_settlement == 10)
        {
            //$req['emails'][] = 'snbulletin@kcell.kz';
            $req['emails'][] = 'daniyar.kudaibergenev@kcell.kz';
            $req['emails'][] = 'controlcenterservices@kcell.kz';
            $req['emails'][] = 'snbulletin@kcell.kz';
        }

        $sms_sender = 'NOC Kcell';
        
        switch ($res->id_region_settlement) {
            case 1:
                $sms_sender = 'NOC Almaty';
                break;
            case 2:
                $sms_sender = 'NOC South';
                break;
            case 3:
                $sms_sender = 'NOC North';
                break;
            case 4:
                $sms_sender = 'NOC West';
                break;
            case 7:
                $sms_sender = 'NOC East';
                break;
            case 8:
                $sms_sender = 'NOC Astana';
                break;
            case 10:
                $sms_sender = 'NOC Service';
                break;
        }
        
        Mail::send('mail', $req, function($message)  use ($req) {
            $message->to($req['emails']);
            $message->subject($req['subject']);
            $message->from('noc@kcell.kz','NOC');
        });

        $this->smpp->setSender($sms_sender);

        $this->smpp->sendBulk($phones, $req_sms);
        
    }

    public function SendTtNotificationTest($res){

        $services = "";
        foreach($res->service_list as $sr)
        {
            $services .= $sr['service_name']."; ";
        }

        $req = [
            'subject' => 'Сервис тикет #'.$res->id.' ('.$res->action->act_title.')',
            'id' => $res->id,
            'status_name' => $res->action->status->name,
            'tt_type' => $res->tt_type_name,
            'priority' => $res->priority_name,
            'network' => $res->network->network,
            'subnetwork' => $res->network_main_label,
            'services' => $services,
            'source_name' => $res->source_name,
            'source_city' => $res->source_city,
            'influence' => $res->influence_name,
            'affection' => $res->affection_name,
            'out_of_service' => ' - ',
            'probable_cause' => $res->prob_cause->cause_1_name,
            'description' => $res->description,
            'start_date' => $res->formatted_start_date,
            'responsible' => $res->created_user,
            'last_action' => $res->action->act_title
        ];

        $req_sms = "TTS: #".$res->id." (".$res->action->status->name.") \n";
        $req_sms .= "Тип тикета: ".$res->tt_type_name."; \n";
        $req_sms .= "Приоритет: ".$res->priority_name."; \n";
        $req_sms .= "Сервисы: ".$services." \n";
        $req_sms .= "Сеть: ".$res->network->network."; \n";
        $req_sms .= "Подсеть: ".$res->network_main_label."; \n";

        $req_sms .= "Объект: ".$res->source_name."; \n";
        $req_sms .= "Расположение: ".$res->source_city."; \n";
        $req_sms .= "Влияние на сервис: ".$res->affection_name."; \n";
        $req_sms .= "Бренд: ".$res->influence_name."; \n";

        if($res->inform_type != 2)
        {
            $req_sms .= "Вне сервиса: \n";
            $req_sms .= " > 2G: ".$res->down_site_2g.";  \n"; 
            $req_sms .= " > 3G: ".$res->down_site_3g.";  \n";
            $req_sms .= " > 4G: ".$res->down_site_4g.";  \n";
        }

        if($res->inform_type == 2)
        {
            $req_sms .= "Описание: ".$res->description."; \n";
        }
        
        $req_sms .= "Начало: ".$res->formatted_start_date."; \n";
        $req_sms .= "Ответсвенный: ".$res->created_user.";";

        // get id_trigger list
        // priority  $res->priority
        // tt_type   $res->tt_type
        // region    $res->id_region_settlement   
        // serv_cat  $res->service_category

            
        $sql = "select distinct s.id  
                from notification_triggers s 
                where (s.id_priority = 0 or (s.id_priority != 0 and s.id_priority >= ".$res->priority.")) and  
                (s.id_tt_type = 0 or s.id_tt_type = ".$res->tt_type.") and  
                (s.id_region = 0 or s.id_region = ".$res->id_region_settlement.") and  
                (s.id_serv_cat = 0 or (s.id_serv_cat >= ".$res->service_category." and s.id_serv_cat < 3))";

        $trigger_list = DB::select($sql);

        $triggers = array();

        foreach($trigger_list as $l)
        {
            $triggers[] = $l->id;
        }

        $user_list = Notification::whereIn('id_trigger',$triggers)->get();

        $phones = array();
        $req['emails'] = array();

        $req['emails'][] = 'serikbek.arpabekov@kcell.kz';
        $req['emails'][] = 'daniyar.kudaibergenev@kcell.kz';
        $req['emails'][] = 'nursultan.alimzhanuly@kcell.kz';

        $phones[] = 77012119565;
        $phones[] = 77012117090;
        $phones[] = 77012119818;

        /*
        foreach($user_list as $list)
        {
            //echo $list->user_info->name." > ".$list->user_info->mobile." > ".$list->user_info->email." <br/>";
            $req['emails'][] = $list->user_info->email;
            
            if($list->user_info->mobile)
            {
                $phone = str_replace("+", "", $list->user_info->mobile);

                if($phone*1 > 0)
                    $phones[] = $phone*1;
            }
        }
        */

        if($res->id_region_settlement == 1)
        {
            $req['emails'][] = 'CN-RNFaultReport@kcell.kz';
            $req['emails'][] = 'CRD-DSDAS-DST-AMO@kcell.kz';
            $req['emails'][] = 'ICTD-IBU-IG@kcell.kz';

            $req['emails'][] = 'controlcenter-mob-almaty@inter-s.kz';
        }

        if($res->id_region_settlement == 3)
        {
            $req['emails'][] = 'FaultaffectingEricsson&ZTENorth@kcell.kz';
            $req['emails'][] = '3G_Faults@kcell.kz';

            $req['emails'][] = 'controlcenter-mob-eastnorth-z@inter-s.kz';
        }

        if($res->id_region_settlement == 2)
        {
            $req['emails'][] = 'CN-RNFaultReportSouth@kcell.kz';
            $req['emails'][] = 'ICTD-IBU-IG@kcell.kz';

            $req['emails'][] = 'controlcenter-mob-south@inter-s.kz';
        }

        if($res->id_region_settlement == 4)
        {
            $req['emails'][] = 'CN-RNFaultReportWest@kcell.kz';
            $req['emails'][] = 'ICTD-IBU-IG@kcell.kz';

            $req['emails'][] = 'controlcenter-mob-west@inter-s.kz';
        }

        if($res->id_region_settlement == 7)
        {
            $req['emails'][] = 'FaultAffectingZTEEast@kcell.kz';

            $req['emails'][] = 'controlcenter-mob-eastnorth-z@inter-s.kz';
        }

        if($res->id_region_settlement == 8)
        {
            $req['emails'][] = 'FaultaffectingEricsson&ZTENorth@kcell.kz';

            $req['emails'][] = 'controlcenter-mob-eastnorth-z@inter-s.kz';
        }

        if($res->id_region_settlement == 10)
        {
            $req['emails'][] = 'snbulletin@kcell.kz';
            $req['emails'][] = 'controlcenterservices@kcell.kz';
        }

        $sms_sender = 'NOC Kcell';
        
        switch ($res->id_region_settlement) {
            case 1:
                $sms_sender = 'NOC Almaty';
                break;
            case 2:
                $sms_sender = 'NOC South';
                break;
            case 3:
                $sms_sender = 'NOC North';
                break;
            case 4:
                $sms_sender = 'NOC West';
                break;
            case 7:
                $sms_sender = 'NOC East';
                break;
            case 8:
                $sms_sender = 'NOC Astana';
                break;
            case 10:
                $sms_sender = 'NOC Service';
                break;
        }
        
        /*
        Mail::send('mail', $req, function($message)  use ($req) {
            $message->to($req['emails']);
            $message->subject($req['subject']);
            $message->from('noc@kcell.kz','NOC');
        });
        */

        $this->smpp->setSender($sms_sender);

        $this->smpp->sendBulk($phones, $req_sms);
        
    }
    
}
