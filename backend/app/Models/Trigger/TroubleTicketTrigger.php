<?php
namespace App\Models\Trigger;

use Illuminate\Database\Eloquent\Model;

class TroubleTicketTrigger extends Model 
{

    protected $table = 'trigger_trouble_ticket';

    public $fillable = [
        'trigger_name',
        'action_id',
        'tt_type',
        'service',
        'service_influence',
        'affection',
        'influence',
        'network_type',
        'prob_cause',
        'created_by'
    ];

    public function getRequest()
    {
        $request = array();
        
        return false;
    }

    /*
        TICKET MAIN 
        $request['id_act'] = 1;
        $request['id_region'] = 1;
        //$request['priority'] = 1;
        $request['tt_type'] = 1;
        $request['status'] = 1;
        $request['network_type'] = '';
        $request['source_name'] = '';
        $request['interruption'] = '';
        $request['affection'] = '';
        $request['influence'] = '';
        $request['probable_cause'] = '';
        $request['start_date'] = '';
        $request['description'] = '';
        
        TICKET SERVICE LIST
        $request['service_type'] : 
            $request['id_service'] 
            $request['id_influence'] 
            $request['start_date'] 
            $request['created_by'] 

            $request['alarms'] : 
                $request['id']
                $request['id_subtype']
                $request['source_name']
                $request['fault_name']
                $request['date_raised']

        TICKET CITY LIST 
        $request['region']
            $request['id']
            $request['label']
    

        influence_options: [
            {value: 1, text: 'Нет'},
            {value: 2, text: 'Kcell'},
            {value: 3, text: 'Activ'},
            {value: 4, text: 'Kcell & Activ'}
        ],
        affection_options: [
            {value: 1, text: 'Без влияния'},
            {value: 2, text: 'Полное'},
            {value: 3, text: 'Частичное'}
        ],
        tt_type_options: [
            {value: 1, text: 'Событие'},
            {value: 2, text: 'Инцидент'}
        ],
    */

    public function MainsProblem()
    {
        $request = array();

        $request['id_act'] = 1;
        $request['id_region'] = 1;
        $request['tt_type'] = 1;  //  FOR Event 
        $request['status'] = 1;  // + 
        $request['network_type'] = 6; // FOR Event mains failure
        $request['interruption'] = null;
        $request['affection'] = 1;  
        $request['influence'] = 4;
        $request['probable_cause'] = 222; 
        $request['description'] = "";   
        $request['created_by'] = 4;      // ROBOT

        $request['region'] = array();
        $request['service_type'] = array();

        $request['id_service'] = 111;
        $request['id_influence'] = 82;

        return $request;
    }

    public function DoorOpenProblem()
    {
        $request = array();

        $request['id_act'] = 1;
        $request['id_region'] = 1;
        $request['tt_type'] = 1;  //  FOR Event 
        $request['status'] = 1;  // + 
        $request['network_type'] = 6; // FOR Event mains failure
        $request['interruption'] = null;
        $request['affection'] = 1;  
        $request['influence'] = 4;
        $request['probable_cause'] = 222; 
        $request['description'] = "";   
        $request['created_by'] = 4;      // ROBOT

        $request['region'] = array();
        $request['service_type'] = array();

        $request['id_service'] = 111;
        $request['id_influence'] = 82;

        return $request;
    }

    public function OutOfServiceProblem() // not mains problem
    {
        $request = array();

        $request['id_act'] = 1;
        $request['id_region'] = 1;
        $request['tt_type'] = 2;  
        $request['status'] = 1;  // + 
        $request['network_type'] = 1; // 1	Telco	RN	2G
        $request['interruption'] = null;
        $request['affection'] = 2;  
        $request['influence'] = 4;
        $request['probable_cause'] = 218; 
        $request['description'] = "";  
        $request['created_by'] = 4;      // ROBOT       

        $request['region'] = array();
        $request['service_type'] = array();

        $request['id_service'] = 111;
        $request['id_influence'] = 82;

        // for update
        $request['network_list']['id'] = 1;
        $request['network_list']['network'] = '11-1';
        $request['network_list']['label'] = '1';
        $request['prob_cause_list']['id'] = 218;
        $request['prob_cause_list']['label'] = '218';

        return $request;
    }

    public function OutOfServiceProblemByMains() // not mains problem
    {
        $request = array();

        $request['id_act'] = 1;
        $request['id_region'] = 1;
        $request['tt_type'] = 2;  
        $request['status'] = 1;  // + 
        $request['network_type'] = 6; // 1	Telco	RN	2G
        $request['interruption'] = null;
        $request['affection'] = 2;  
        $request['influence'] = 4;
        $request['probable_cause'] = 222; 
        $request['description'] = "";  
        $request['created_by'] = 4;      // ROBOT       

        $request['region'] = array();
        $request['service_type'] = array();

        $request['id_service'] = 111;
        $request['id_influence'] = 82;

        // for update
        $request['network_list']['id'] = 6;
        $request['network_list']['network'] = '11-1';
        $request['network_list']['label'] = '1';
        $request['prob_cause_list']['id'] = 222;
        $request['prob_cause_list']['label'] = '222';

        return $request;
    }

    public function GetTriggerParameters($tech,$subtype,$type){
        $data = array();

        if($subtype*1 == 5) // mains
        {
            $data['network_type'] = 6; 
            $data['probable_cause'] = 222; 
        }
        elseif ($subtype*1 == 6) // door open
        {
            $data['network_type'] = 79; 
            $data['probable_cause'] = 238; 
        }
        elseif ($subtype*1 == 7) // high temp
        {
            $data['network_type'] = 7; 
            $data['probable_cause'] = 229; 
        }
        elseif ($subtype*1 == 8) // air conditioner
        {
            $data['network_type'] = 7; 
            $data['probable_cause'] = 229; 
        }
        else 
        {
            if($subtype*1 == 1 || $subtype*1 == 2)
            {
                if($type == 2) // has mains ticket
                {
                    $data['network_type'] = 6; 
                    $data['probable_cause'] = 222; 
                }
                else
                {
                    if($tech == '2G')
                    {
                        $data['network_type'] = 1; 
                        $data['probable_cause'] = 219; 
                    }
                    if($tech == '3G')
                    {
                        $data['network_type'] = 2; 
                        $data['probable_cause'] = 219; 
                    }
                    if($tech == '4G')
                    {
                        $data['network_type'] = 3; 
                        $data['probable_cause'] = 219; 
                    }
                }
            }
        }
        

        return $data;
    }
    
}

?>