<?php
namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Monitoring\Alarms;
use App\Models\Administrative\SiteHop;

class AlarmController extends Controller
{
    public function putAlarms(Request $request)
    {
        try {
            $data=$request->input();
            foreach($data as $item)
            {
                if($item['id_subtype'])
                {
                    for($i=0;$i<count($item['id_subtype']);$i++)
                    {
                        $this->saveAlarm($item,$item['id_subtype'][$i]);
                    }
                }
                else{
                    $this->saveAlarm($item,0);
                } 
            }
            $this->cease($data);
            return response()->json(['success'=>1]);
        } catch (Exception $e) {
            echo 'Выброшено исключение: ',  $e->getMessage(), "\n";
            return response()->json(['json'=>$e->getMessage(),'error'=>1]);
        }
        
    }


    protected function saveAlarm($item,$id_subtype)
    {
        //$find=Alarms::where(['id_vendor'=>$item['id_vendor'],'id_subtype'=>$id_subtype,'is_active'=>1,'technology'=>$item['technology'],'vendor_type'=>$item['vendor_type']])->first();
        
        $find=Alarms::where('id_vendor', '=', $item['id_vendor'])
            ->where('technology', '=', $item['technology'])
            ->where('vendor_type', '=', $item['vendor_type'])
            ->where('is_active', '=', 1)
            ->where(function($query) use ($id_subtype) {
                $query->where('id_subtype', '=', $id_subtype)
                ->orWhere('id_subtype', '=', 1);
            })
            ->first();
        if(!$find)
        {
            $model=new Alarms();
            $model->id_vendor = $item['id_vendor'];
            $model->id_subtype = $id_subtype;
            $model->id_region =	$item['id_region'];
            $model->id_severity = $item['id_severity'];
            $model->id_severity_vendor = $item['id_severity_vendor'];
            $model->fault_code = $item['fault_code'];
            $model->technology = $item['technology'];
            $model->vendor = $item['vendor'];
            $model->vendor_type = $item['vendor_type'];
            $model->network = $item['network'];
            $model->network_element = $item['network_element'];
            $model->source_element = $item['source_element'];
            $model->source_type = $item['source_type'];
            $model->source_name = $item['source_name'];
            $model->fault_name = $item['fault_name'];
            $model->fault_text_1 = $item['fault_text_1'];
            $model->fault_text_2 = $item['fault_text_2'];
            $model->id_trouble=$item['id_trouble'];
            $model->obj_ref=$item['obj_ref'];
            $model->id_parent_alarm=$item['id_parent_alarm'];;
            $model->is_active=1;
            $model->date_raised = $item['date_raised'];
            $model->updated_at = date('Y-m-d H:i:s');
            $model->save();
        }
        else{
            $find->updated_at=date('Y-m-d H:i:s');
            $find->save();
        }
        
    }

    protected function cease($data)
    {
        $data_collect= collect($data);
        $tech=$data[0]['technology'];
        $vendor_type=$data[0]['vendor_type'];
        $exist_vendor_id = $data_collect->pluck('id_vendor');

        $datetime_from = date("Y-m-d H:i:s",strtotime("-5 minutes",strtotime(date('Y-m-d H:i:s'))));

        Alarms::where(['is_active'=>1,'technology'=>$tech,'vendor_type'=>$vendor_type])
            ->whereNotIn('id_vendor', $exist_vendor_id)
            ->where('updated_at','<',$datetime_from)
            ->update(['is_active' => 0,'date_cleared'=>$datetime_from]);   
    }

    // TN Alarms

    public function putTnAlarm(Request $request)
    {
        /*
        $data=$request->input();

        $item = $data['list'][0];

        try { 

            $find=SiteHop::where(['ip_hop'=>$item['source_element']])->first();
            $source_name = $find->hop_name;
        } catch(\Illuminate\Database\QueryException $ex){ 
            return $ex->getMessage(); 
        }
        
        

        return "completed: ".$source_name;
        */
        
        try {
            $data=$request->input();

            if(count($data['list']) > 0)
            {
                $item2 = $data['list'][0];
                $find=SiteHop::where(['ip_hop'=>$item2['source_element']])->first();
                $source_name = $find->hop_name;

                foreach($data['list'] as $item)
                {
                    $item['source_name'] = $source_name;
                    $this->saveTnAlarm($item);
                }
                $this->ceaseTnAlarm($data);
            }
            

            return response()->json(['success'=>1]);
        } catch (Exception $e) {
            echo 'Выброшено исключение: ',  $e->getMessage(), "\n";
            return response()->json(['json'=>$e->getMessage(),'error'=>1]);
        }
        
    }


    protected function saveTnAlarm($item)
    {
        $find=Alarms::where('technology', '=', $item['technology'])
            ->where('network_element', '=', $item['network_element'])
            ->where('source_element', '=', $item['source_element'])
            ->where('source_type', '=', $item['source_type'])
            ->where('fault_name', '=', $item['fault_name'])
            ->where('is_active', '=', 1)
        ->first();

        if(!$find)
        {
            $model=new Alarms();
            $model->id_vendor = 0;
            $model->id_subtype = 88;
            $model->id_region =	1;
            $model->id_severity = $item['id_severity'];
            $model->id_severity_vendor = $item['id_severity'];
            $model->fault_code = $item['fault_code']; // cause
            $model->technology = $item['technology'];
            $model->vendor = $item['vendor'];
            $model->vendor_type = $item['vendor'];
            $model->network = $item['network'];
            $model->network_element = $item['network_element'];
            $model->source_element = $item['source_element'];
            $model->source_type = $item['source_type'];
            $model->source_name = $item['source_name'];
            $model->fault_name = $item['fault_name'];
            $model->fault_text_1 = '-';
            $model->fault_text_2 = '-';
            $model->id_trouble = null;
            $model->obj_ref = $item['fault_name'];
            $model->id_parent_alarm = null;
            $model->is_active = 1;
            $model->date_raised = $item['date_raised'];
            $model->updated_at = date('Y-m-d H:i:s');
            $model->save();
        }
        else{
            $find->updated_at=date('Y-m-d H:i:s');
            $find->save();
        }
        
    }

    protected function ceaseTnAlarm($data)
    {
        $data_collect= collect($data);
        $item = $data['list'][0];
        $datetime_from = date("Y-m-d H:i:s",strtotime("-10 minutes",strtotime(date('Y-m-d H:i:s'))));

        Alarms::where('is_active', '=', 1)
            ->where('technology', '=', $item['technology'])
            ->where('network_element', '=', $item['network_element'])
            ->where('source_element', '=', $item['source_element'])
            ->where('updated_at', '<', $datetime_from)
            ->update(['is_active' => 0,'date_cleared'=>$datetime_from]);   
    }
    

    

}