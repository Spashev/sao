<?php

namespace App\Models\Services;

use Illuminate\Database\Eloquent\Model;

class ServiceProblemGroups extends Model
{
    protected $table = 'service_problem_groups';

    protected $fillable = [
        'group_name'
    ];
}
