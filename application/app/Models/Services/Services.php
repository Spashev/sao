<?php

namespace App\Models\Services;

use App\Models\Services\ServiceGroup;
use App\Models\Services\ServiceInfluenceConns;
use App\Models\Services\ServiceProblemConns;
use App\Models\Services\ServiceSubnetworkConns;
use App\Models\Services\ServicePriorities;
use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    protected $table = 'services';

    protected $fillable = ["id_service_group", "service_name", "service_type"];

    protected $with = ['group_info'];

    public function group_info() {
        return $this->belongsTo(ServiceGroup::class, 'id_service_group');
    }

    public function influence_conns() {
        return $this->hasMany(ServiceInfluenceConns::class, 'id_service','id');
    }

    public function problem_conns() {
        return $this->hasMany(ServiceProblemConns::class, 'id_service','id');
    }

    public function subnetwork_conns() {
        return $this->hasMany(ServiceSubnetworkConns::class, 'id_service','id');
    }

    public function priorities_list() {
        return $this->hasMany(ServicePriorities::class, 'id_service','id');
    }

    public function getServiceOptions($query) {

        $list = Services::
                join('service_groups', 'service_groups.id', '=', 'services.id_service_group')
                ->join('service_influence_conns', 'service_influence_conns.id_service', '=', 'services.id')
                ->join('service_influence_conditions', 'service_influence_conditions.id', '=', 'service_influence_conns.id_service_influence')
                ->join('service_influence_groups', 'service_influence_groups.id', '=', 'service_influence_conditions.id_influence_group')
                ->select(
                    'services.id', 
                    'services.service_name', 
                    'services.service_type', 
                    'service_groups.group_name', 
                    'service_influence_conns.id_service_influence',
                    'service_influence_conditions.influence_condition_name',
                    'service_influence_groups.trigger_name',
                    'service_influence_groups.influence_group_name'
                    )
                ->whereRaw('LOWER(services.service_name) like ?', ['%'.$query.'%'])
                ->orderBy('services.service_name', 'desc')->get();

        // where s.service_name like '%". $query ."%'  
        $list_arr = array();

        foreach ($list as &$item) {
            $list_arr[$item['id']]['id_service'] = $item['id'];
            $list_arr[$item['id']]['service_name'] = $item['service_name'];
            $list_arr[$item['id']]['service_type'] = $item['service_type'];
            $list_arr[$item['id']]['group_name'] = $item['group_name'];
            $list_arr[$item['id']]['label'] = $item['service_name'].'('.$item['group_name'].')';
            $list_arr[$item['id']]['id_influence'] = null;
            $list_arr[$item['id']]['id_city_type'] = null;
            $list_arr[$item['id']]['id_priority'] = null;
            $list_arr[$item['id']]['start_date'] = null;
            $list_arr[$item['id']]['start_time'] = null;
            $list_arr[$item['id']]['finish_date'] = null;
            $list_arr[$item['id']]['finish_time'] = null;
            $list_arr[$item['id']]['influence_options'][$item['id_service_influence']]['id_influence'] = $item['id_service_influence'];
            $list_arr[$item['id']]['influence_options'][$item['id_service_influence']]['influence_condition_name'] = $item['influence_condition_name'];
            $list_arr[$item['id']]['influence_options'][$item['id_service_influence']]['influence_group_name'] = $item['influence_group_name'];
            $list_arr[$item['id']]['influence_options'][$item['id_service_influence']]['trigger_name'] = $item['trigger_name'];
            $list_arr[$item['id']]['influence_options'][$item['id_service_influence']]['label'] = $item['influence_group_name'].': '.$item['influence_condition_name'].'('.$item['trigger_name'].')';

            $list_arr[$item['id']]['alarms'] = array();
            $list_arr[$item['id']]['down_services'] = array();
        }

        $list_arr = array_values($list_arr);

        return $list_arr;
    }
}
