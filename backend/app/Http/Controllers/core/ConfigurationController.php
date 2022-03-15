<?php
namespace App\Http\Controllers\core;

use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

use App\Models\Administrative\SiteHop;
use App\Models\Administrative\SiteHopSlot;
use App\Models\Administrative\SiteHopParent;

use App\Models\Notification\Notification;

class ConfigurationController extends Controller
{
    public function getTest()
    {
        //$datetime_from = date("Y-m-d H:i:s",strtotime("-5 minutes",strtotime(date('Y-m-d H:i:s'))));
        //echo $datetime_from;

        $test = new Notification();

        $req = array();

        $req = [
            'user_list' => ['daniyar.kudaibergenev@kcell.kz'],
            'subject' => 'Сервис тикет #4324234 (создан)',
            'id' => ' HI, Daniyar',
            'status_name' => '$res->status_name',
            'tt_type' => '$res->tt_type_name',
            'priority' => '$res->priority_name',
            'network' => ' HI, Daniyar',
            'subnetwork' => ' HI, Daniyar',
            'subnetwork1' => ' HI, Daniyar',
            'source_name' => ' HI, Daniyar',
            'source_city' => ' HI, Daniyar',
            'influence' => ' HI, Daniyar',
            'affection' => ' HI, Daniyar',
            'out_of_service' => ' HI, Daniyar',
            'probable_cause' => ' HI, Daniyar',
            'description' => ' HI, Daniyar',
            'start_date' => ' HI, Daniyar',
            'responsible' => ' HI, Daniyar',
            'last_action' => ' HI, Daniyar'
        ];
        /*
        $req['user_list'] = array();
        $req['user_list'][] = 'daniyar.kudaibergenev@kcell.kz';

        $req['subject'] = 'Сервис тикет #4324234 (создан)';
        $req['message'] = ' Test message from ESUR trouble ticket';
        $req['name'] = ' HI, Daniyar';
        */

        //$result = $test->SendEmailTest($req);

        $phone_list = array();

        $result = $test->SendSmsTest();
    }
    // TRANSMISSION -- 4

    // hops merge
    public function mergeTransmissionSiteHop(Request $request)
    {
        try {
            $data=$request->input();
            $find=SiteHop::where(['ip_hop'=>$data['ip_hop']])->first();
            if(!$find)
            {
                $model=new SiteHop();
                $model->ip_hop = $data['ip_hop'];
                $model->hop_name = $data['hop_name'];
                $model->site_name =	$data['site_name'];
                $model->baseline = $data['baseline'];
                $model->is_parent = $data['is_parent'];
                $model->is_active = $data['is_active'];
                $model->save();
            }
            else{
                $find->hop_name = $data['hop_name'];
                $find->site_name = $data['site_name'];
                $find->baseline = $data['baseline'];
                $find->updated_at=date('Y-m-d H:i:s');
                $find->save();
            }
            return response()->json(['success'=>1]);
        } catch (Exception $e) {
            echo 'Выброшено исключение: ',  $e->getMessage(), "\n";
            return response()->json(['json'=>$e->getMessage(),'error'=>1]);
        }
    }

    public function getTransmissionSiteHopList(Request $request)
    {
        try {
            $data=$request->input();

            $sql = "select distinct s.* 
                    from adm_site_hops s 
                    left join adm_site_hop_slots h on h.ip_base = s.ip_hop and h.updated_at > '2021-09-06 20:10' 
                    where s.is_active = 1 and h.ip_base is null 
                    limit ".$data['limit']." offset ".$data['offset'];
            /*        
            $sql = "select distinct s.* from adm_site_hops s 
                    left join adm_site_hop_slots h on h.ip_base = s.ip_hop  
                    where s.is_active = 1 
                    limit ".$data['limit']." offset ".$data['offset'];
            */

                    
            $hop_list = DB::select($sql);
            /*
            $hop_list = SiteHop::
                join('adm_site_hop_slots', 'adm_site_hop_slots.ip_base', '=', 'adm_site_hops.ip_hop')
                ->select('adm_site_hops.*')
                ->where('adm_site_hops.is_active', '=', 1)
                //->whereNull('adm_site_hop_slots.ip_base')
                ->orderBy('adm_site_hops.id', 'asc')
                ->get();
                //->offset($data['offset'])
                //->limit($data['limit'])
                //->get();
            */
            return response()->json($hop_list);
        } catch (Exception $e) {
            return response()->json(['json'=>$e->getMessage(),'error'=>1]);
        }
    }

    public function getTransmissionSiteHopIpFirstList(Request $request)
    {
        try {
            $data=$request->input();

            $sql = "select distinct(h.ip_hop) ip_hop, h.syslog_is_on 
                    from adm_site_hops h 
                    left join adm_site_hop_slots s on s.ip_base = h.ip_hop 
                    where s.ip_base = s.ip_first";
                    
            $hop_list = DB::select($sql);

            return response()->json($hop_list);
        } catch (Exception $e) {
            return response()->json(['json'=>$e->getMessage(),'error'=>1]);
        }
    }

    public function updateTransmissionSiteHopSyslog(Request $request)
    {
        try {
            $data=$request->input();

            $find=SiteHop::where(['ip_hop'=>$data['ip_hop']])->first();
            $find->syslog_is_on = 1;
            $find->save();
            
            return response()->json(['success'=>1]);
        } catch (Exception $e) {
            echo 'Выброшено исключение: ',  $e->getMessage(), "\n";
            return response()->json(['json'=>$e->getMessage(),'error'=>1]);
        }
    }

    public function mergeTransmissionSiteHopSlot(Request $request)
    {
        try {
            $data=$request->input();
            $find=SiteHopSlot::where(['ip_base'=>$data['ip_base'],'slot'=>$data['slot']])->first();
            if(!$find)
            {
                $model=new SiteHopSlot();
                $model->slot = $data['slot'];
                $model->ip_base = $data['ip_base'];
                $model->ip_first =	$data['ip_first'];
                $model->ip_second = $data['ip_second'];
                $model->is_active = $data['is_active'];
                $model->is_reserved_link = $data['is_reserved_link'];
                $model->created_at = date('Y-m-d H:i:s');
                $model->save();
            }
            else{

                if(!$data['ip_first'])
                $find->ip_first = $data['ip_first'];

                if(!$data['ip_second'])
                $find->ip_second = $data['ip_second'];

                if($find->is_reserved_link != $data['is_reserved_link']*1)
                $find->is_reserved_link = $data['is_reserved_link'];

                $find->is_active = $data['is_active'];

                $find->updated_at=date('Y-m-d H:i:s');
                $find->save();
            }
            return response()->json(['success'=>1]);
        } catch (Exception $e) {
            echo 'Выброшено исключение: ',  $e->getMessage(), "\n";
            return response()->json(['json'=>$e->getMessage(),'error'=>1]);
        }
        
    }

    // for Draw Topology
    public function getTransmissionSiteHopRootList(Request $request)
    {
        try {
            $data=$request->input();

            $sql = "select distinct h.ip_hop ip_first, substring(h.hop_name,6,5) id_site 
                    from adm_site_hops h 
                    left join adm_site_hop_slots s on h.ip_hop = s.ip_first 
                    where s.ip_base =s.ip_first and h.is_active = 1 and h.is_parent = 1";
                    
            $hop_list = DB::select($sql);

            return response()->json($hop_list);
        } catch (Exception $e) {
            return response()->json(['json'=>$e->getMessage(),'error'=>1]);
        }
    }

    public function getTransmissionSiteHopSlotList(Request $request)
    {
        try {
            $data=$request->input();

            $sql = "select distinct s.ip_first, s.ip_second, substring(h.hop_name,6,5) id_site 
                    from adm_site_hop_slots s 
                    left join adm_site_hops h on h.ip_hop = s.ip_first and h.is_active = 1 
                    where s.is_reserved_link != 1 and s.ip_first is not null and h.hop_name is not null";
                    
            $hop_list = DB::select($sql);

            return response()->json($hop_list);
        } catch (Exception $e) {
            return response()->json(['json'=>$e->getMessage(),'error'=>1]);
        }
    }

    /*
    public function getTransmissionSiteHopSlotList(Request $request)
    {
        try {
            $data=$request->input();

            $sql = "select distinct s.ip_first, substring(h.hop_name,6,5) id_site 
                    from adm_site_hop_slots s 
                    left join adm_site_hops h on h.ip_hop = s.ip_first and h.is_active = 1 
                    left join adm_site_hop_parents p on p.id_site_base = substring(h.hop_name,6,5) and p.is_active = 2 
                    where s.ip_second = '".$data['ip_first']."' and s.is_reserved_link != 1 and p.id_site_base is null";
                    
            $hop_list = DB::select($sql);

            return response()->json($hop_list);
        } catch (Exception $e) {
            return response()->json(['json'=>$e->getMessage(),'error'=>1]);
        }
    }
    */

    public function updateTransmissionSiteHopTopology(Request $request)
    {

        try { 
            $data=$request->input();
            $vals = array();

            foreach($data['list'] as $item){ //$intersts array contains input data

                if($item['id_site_parent'] == '0') $item['id_site_parent'] = null;

                $list = new SiteHopParent();
                $list->id_site_base = $item['id_site'];
                $list->id_site_parent = $item['id_site_parent'];
                $list->id_site_main_parent = $item['id_site_main_parent'];
                $list->level_site = $item['level_site'];
                $list->child_cnt = 0;
                $list->is_active = 2;
                $list->created_at = date('Y-m-d H:i:s');
                $list->updated_at = date('Y-m-d H:i:s');

                $vals[] = $list->attributesToArray();
            }
            

            SiteHopParent::insert($vals);

            return count($data['list']);
            
        } 
        catch(\Illuminate\Database\QueryException $ex)
        { 
            return $ex->getMessage();
        }
    }


    // old

    public function drawTransmissionTopology_test(Request $request)
    {
        //$this->createTree3($new, $new[$data['site']],$data['site'],$ordi);
        $sql = "select h.hop_name, s.ip_base, s.ip_second, h.is_parent from adm_site_hop_slots as s 
                left join adm_site_hops as h on h.ip_hop = s.ip_base 
                order by h.is_parent, h.hop_name desc";
        $data = DB::select($sql);

        $childs = array();
        $main_data = array();
        $temp_data = array();
        $cc = 0;
        foreach ($data as $key=>$a){	
            if($a->is_parent == 1 && $a->ip_base == '10.9.0.40')
            //if($a->is_parent == 1)
            {
                $main_data[$a->ip_base]['ip_parent'] = $a->ip_base;
                $main_data[$a->ip_base]['childs'] = array();
                $childs = array();
                $childs['list'] = array();
                $lvl = 0;
                unset($data[$key]);
                $temp = $this->createTopTree($data, $childs, $a->ip_base, $a->ip_base, $lvl, 0);
                $main_data[$a->ip_base]['childs'] = $temp['list'];
                $main_data[$a->ip_base]['cnt'] = count($temp['list']);

                $cc++;
                if($cc == 1)
                    break;
            }
            else 
            {
                $temp_data[] = $a;
            }
        }
        
        return response()->json(['data'=>$main_data]);

    }

    function createTopTree($temp_list, $main_data, $main_parent, $child_parent, $lvl, $lvl1){
        $j = 0;
        $lvl1++;
        
        $find = 0;
        foreach($temp_list as $key=>$k)
        {
            if(!in_array($k->ip_base, $main_data['list']))
            {
                if($k->ip_second == $child_parent && $k->ip_base != $main_parent)
                {
                    $main_data['list'][] = $k->ip_base;

                    unset($temp_list[$key]);

                    $lvl++;

                    echo $lvl1." - ".$child_parent.":: \n";

                    $temp = $this->createTopTree($temp_list, $main_data, $main_parent, $k->ip_base, $lvl, $lvl1);

                    $main_data['list'] = $temp['list'];
                    
                    $find = 1;
                }
                
            }
            
            $j++;
        }

        if($find == 0)
        {
            echo $lvl1." - ".$child_parent.":: \n";
        }

        
        
        $main_data['cnt'] = $j;
        return $main_data;
	}

    public function drawTransmissionTopology(Request $request)
    {
        $id_site = $request->get('id_site');

        //$this->createTree3($new, $new[$data['site']],$data['site'],$ordi);
        $sql = "select distinct h.hop_name, substring(h.hop_name,6,5) id_site, s.ip_first ip_base, s.ip_second, h.is_parent, p.id_site_base 
                from adm_site_hop_slots as s 
                left join adm_site_hops as h on h.ip_hop = s.ip_first 
                left join adm_site_hop_parents p on p.id_site_base = substring(h.hop_name,6,5) and h.is_parent = 1 
                where p.id_site_base is null and s.is_reserved_link != 1 and s.ip_first is not null 
                order by h.is_parent desc";
        //and substring(h.hop_name,6,5) = '".$id_site."' 
        $data = DB::select($sql);

        $sql2 = "select distinct h.hop_name, substring(h.hop_name,6,5) id_site, s.ip_first ip_base, null ip_second, h.is_parent, p.id_site_base, s.is_reserved_link 
                from adm_site_hop_slots as s 
                left join adm_site_hops as h on h.ip_hop = s.ip_first 
                left join adm_site_hop_parents p on p.id_site_base = substring(h.hop_name,6,5) and h.is_parent = 1 
                where p.id_site_base is null and s.is_reserved_link != 1 and s.ip_first is not null 
                order by h.is_parent desc";
        $data2 = DB::select($sql2);

        $childs = array();
        $main_data = array();
        $temp_data = array();
        $cc = 0;
        foreach ($data2 as $key=>$a){	
            // if($a->is_parent == 1 && $a->ip_base == '10.9.0.40')
            //if($a->is_parent == 1)
            if($a->is_parent == 1)
            {
                $childs = array();
                $childs['list'] = array();
                $lvl = 0;
                unset($data[$key]);

                $model=new SiteHopParent();
                $model->id_site_base = $a->id_site;
                $model->id_site_parent = null;
                $model->id_site_main_parent = $a->id_site;
                $model->level_site = $lvl;
                $model->child_cnt = 0;
                $model->save();

                $temp = $this->createTopTree2($data, $childs, $a->ip_base, $a->id_site, $a->ip_base, $a->id_site, $lvl, 0);
            }

            $cc++;
            if($cc == 10)
                break;
        }
        
        return response()->json(['data'=>'ok']);

    }

    function createTopTree2($temp_list, $main_data, $main_parent, $main_parent_name, $child_parent, $child_parent_name, $lvl, $lvl1){
        $j = 0;
        $lvl1++;
        
        $find = 0;
        foreach($temp_list as $key=>$k)
        {
            if(!in_array($k->ip_base, $main_data['list']))
            {
                if($k->ip_second == $child_parent && $k->ip_base != $main_parent)
                {
                    $main_data['list'][] = $k->ip_base;

                    unset($temp_list[$key]);

                    $lvl++;

                    //echo $lvl1." - ".$child_parent.":: \n";

                    $model=new SiteHopParent();
                    $model->id_site_base = $k->id_site;
                    $model->id_site_parent = $child_parent_name;
                    $model->id_site_main_parent = $main_parent_name;
                    $model->level_site = $lvl1;
                    $model->child_cnt = 0;
                    $model->save();

                    $temp = $this->createTopTree2($temp_list, $main_data, $main_parent, $main_parent_name, $k->ip_base, $k->id_site, $lvl, $lvl1);

                    $main_data['list'] = $temp['list'];
                    
                    $find = 1;
                }
                
            }
            
            $j++;
        }
        /*
        if($find == 0)
        {
            echo $lvl1." - ".$child_parent.":: \n";
        }
        */
        
        
        $main_data['cnt'] = $j;
        return $main_data;
	}


    function createTree(&$list, $parent, $hope,$ordi){
		$tree = array();
		foreach ($parent as $k=>$l)
		{
			$tree['list'][] = $l;
			
			$is_hope = 0;
			$ordi++;
			
			$db = Yii::app()->dbOracle1; 
			$command = $db->createProcedure("begin PKG_TRANSMISSON_TOPOLOGY.TRANSMISSION_TOPOLOGY_INSERT(:p_site,
																										 :p_parent,
																										 :p_hope,
																										 :p_ishope,
																										 :p_order
																										);end;");
			$command->bindValue(":p_site",$l['id']);
			$command->bindValue(":p_parent",$l['parentId']);
			$command->bindValue(":p_hope",$hope);
			$command->bindValue(":p_ishope",$is_hope);
			$command->bindValue(":p_order",$ordi);
			$command->exec();
			
			if(isset($list[$l['id']])){
				$this->createTree3($list, $list[$l['id']],$hope,$ordi);
			}
			
		} 
	}
}

?>