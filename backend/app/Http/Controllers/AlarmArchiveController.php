<?php
namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Monitoring\Alarms;
use App\Models\Monitoring\AlarmsArchive;

class AlarmArchiveController extends Controller
{
    public function toArch(Request $request)
    {
       $deactive= Alarms::where(['is_active'=>0])->get();
       foreach($deactive as $item)
       {
           
            $this->saveAlarm($item);
           
       }  

       $collect_deactivated =  $deactive->pluck('id_vendor');
       Alarms::whereIn('id_vendor', $collect_deactivated)->delete();
        
    }


    protected function saveAlarm($item)
    {
        
            $model=new AlarmsArchive();
            $model->id_vendor = $item['id_vendor'];
            $model->id_subtype = $item['id_subtype'];
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
            $model->is_active=0;
            $model->date_raised = $item['date_raised'];
            $model->save();
       
        
    }

   

}