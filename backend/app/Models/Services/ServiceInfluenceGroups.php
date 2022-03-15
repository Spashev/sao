<?php

namespace App\Models\Services;

use Illuminate\Database\Eloquent\Model;

class ServiceInfluenceGroups extends Model
{
    protected $table = 'service_influence_groups';

    protected $fillable = [
        'trigger_name','influence_group_name'
    ];

    
}
