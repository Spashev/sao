<?php

namespace App\Models\Services;

use App\Models\Services\ServiceInfluenceConditions;
use Illuminate\Database\Eloquent\Model;

class ServiceInfluenceConns extends Model
{
    protected $table = 'service_influence_conns';

    protected $fillable = [
        'id_service','id_service_influence','state'
    ];

    protected $with = ['influence_info'];

    /*public function influenceCondition()
    {
        return $this->hasOne('App\Models\Services\ServiceInfluenceConditions', 'id','id_service_influence');
    }

    public function influenceGroup()
    {
        return $this->hasOne('App\Models\Services\ServiceInfluenceGroups', 'id','id_influence_group');
    }*/

    public function influence_info() {
        return $this->belongsTo(ServiceInfluenceConditions::class, 'id_service_influence');
    }

    
}
