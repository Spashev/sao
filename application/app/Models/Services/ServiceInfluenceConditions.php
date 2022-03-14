<?php

namespace App\Models\Services;

use App\Models\Services\ServiceInfluenceGroups;
use Illuminate\Database\Eloquent\Model;

class ServiceInfluenceConditions extends Model
{
    protected $table = 'service_influence_conditions';
    
    protected $fillable = ['id_influence_group','influence_condition_name'];

    protected $with = [ 'group_info' ];

    public function group_info() {
        return $this->belongsTo(ServiceInfluenceGroups::class, 'id_influence_group');
    }
}
