<?php

namespace App\Http\Controllers;

use App\Models\Services\Services;
use App\Models\Services\ServiceGroup;
use App\Models\Services\ServiceInfluenceConditions;
use App\Models\Services\ServiceInfluenceConns;
use App\Models\Services\ServicePriorities;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{
    public function getServiceList(Request $request)
    {
       
        $list=Services::get();
       
        return response()->json(['list'=>$list]);
    }

    public function getServiceGroupListTotal(Request $request)
    {
       
        $list=ServiceGroup::with(['services' => function ($serv){
            return $serv->with([
                'influence_conns',
                'subnetwork_conns' => function ($subn_conns){
                    return $subn_conns;
                },
                'priorities_list'
            ]);
        }])->get();

        /*

        priorities_list


        $list = ServiceGroups::with([
            'service_info' => function ($users) {
                return $users->with([
                    'user_services_info' => function ($users){
                        return $users;
                    }
                ]);
            }
        ])->get();
        */
       
        return response()->json(['list'=>$list]);
    }

    public function getServiceInfluenceList(Request $request)
    {
       
        $list=ServiceInfluenceConditions::
            select(DB::raw("service_influence_conditions.id, CONCAT(service_influence_groups.trigger_name,':: ', service_influence_groups.influence_group_name, ':: ', service_influence_conditions.influence_condition_name) AS label"))
            ->leftJoin('service_influence_groups', 'service_influence_groups.id', '=', 'service_influence_conditions.id_influence_group')
            ->get();
       
        return response()->json(['list'=>$list]);
    }

    public function addService(Request $request)
    {
        $model=new Services();
        $model->id_service_group=$request->input('sel_group_id');
        $model->service_name=$request->input('sel_service_name');
        $model->save();

        return response()->json(['object'=>$model]);
    }

    public function addInfluenceToPriority(Request $request)
    {
        $service = ServiceInfluenceConns::
            select("id")
            ->where('id_service', $request->input('id_service'))
            ->where('id_service_influence', $request->input('id_service_influence'))
            ->first();
        
        if(!$service)
        {
            $model=new ServiceInfluenceConns();
            $model->id_service = $request->input('id_service');
            $model->id_service_influence = $request->input('id_service_influence');
            $model->state = 1;
            $model->save();
        }

        if($request->input('id_priority_1')*1 > 0)
        {
            $model_1 = new ServicePriorities();
            $model_1->id_service = $request->input('id_service');
            $model_1->id_influence = $request->input('id_service_influence');
            $model_1->id_city_type = 1;
            $model_1->id_priority = $request->input('id_priority_1');
            $model_1->created_by = auth()->user()->id;
            $model_1->save();
        }

        if($request->input('id_priority_2')*1 > 0)
        {
            $model_1 = new ServicePriorities();
            $model_1->id_service = $request->input('id_service');
            $model_1->id_influence = $request->input('id_service_influence');
            $model_1->id_city_type = 2;
            $model_1->id_priority = $request->input('id_priority_2');
            $model_1->created_by = auth()->user()->id;
            $model_1->save();
        }

        if($request->input('id_priority_3')*1 > 0)
        {
            $model_1 = new ServicePriorities();
            $model_1->id_service = $request->input('id_service');
            $model_1->id_influence = $request->input('id_service_influence');
            $model_1->id_city_type = 3;
            $model_1->id_priority = $request->input('id_priority_3');
            $model_1->created_by = auth()->user()->id;
            $model_1->save();
        }

        return response()->json(['object'=>$model]);
    }

    
}
