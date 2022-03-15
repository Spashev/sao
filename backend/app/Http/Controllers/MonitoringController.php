<?php

namespace App\Http\Controllers;

use App\Models\Monitoring\Alarms;
use App\Models\Catalog\Region;
use App\Models\Catalog\Subtype;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB; 

class MonitoringController extends Controller
{
    public function index(Request $request)
    {
        
        $id_region = $request->get('id_region');
        $id_subtype = $request->get('id_subtype');
        $technology = $request->get('technology');
        $technology= strval($technology).'G';
        //is active need add
        $alarms=Alarms::where(['id_region'=> $id_region,'id_subtype'=>$id_subtype,'technology'=>$technology,'is_active'=>1])->get();
        return response()->json(['list' => $alarms], 200);
    }


    public function group(Request $request)
    {
        //init data
        $data=null;
        $data2=null;
        $alarms=null;
        $regions=null;
        $subtypes=null;
        $regions=Region::all();
        $subtypes=Subtype::all();
        for($i=0;$i<11;$i++){
            for($j=0;$j<130;$j++)
            {
                for($g=2;$g<5;$g++)
                {
                    $data[$i][$j][$g]=null;
                }
                
            }
        }
        $alarms=Alarms::where(['is_active'=>1])->get();
      
        if($alarms)
        {
            $count=0;
            foreach($alarms as $item)
            {
                
                $temp_region=$item['id_region'];
                $tech=preg_replace('~\D+~','', $item['technology']);
                
                $temp_subtype=$item['id_subtype'];
                //sdelat algoritmom
                $n=0;
                
            
                if(isset($data[$item['id_region']][$item['id_subtype']][$tech]))
                {
                    $c=$data[$item['id_region']][$item['id_subtype']][$tech];
                    $c+=1;
                    $data[$item['id_region']][$item['id_subtype']][$tech]=$c;
                }
                else{
                    $data[$item['id_region']][$item['id_subtype']][$tech]=1;
                }
                
            }
        }

        return response()->json(['data' => $data,'regions'=>$regions,'subtypes'=>$subtypes], 200);
    }

    public function getActiveAlarms(Request $request){

        $id = $request->get('id');

        //$list = Alarms::select(DB::raw("*, 0 is_source, id vbt_id"))->get();
        $list = Alarms::where(['is_active'=>1])->get();

        return response()->json(['list' => $list], 200);
    }

    public function getActiveAlarmBySubType(Request $request){

        $list = Alarms::where(['is_active'=>1,])->whereIn('id_subtype',[1,2])->get();
        $data = array();

        foreach($list as $l){
            $l['cell_name'] = "";
            $data[$l['id_subtype']][] = $l;
        }

        return response()->json(['data' => $data], 200);
    }
}
