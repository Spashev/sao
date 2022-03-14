<?php

namespace App\Models\Services;

use Illuminate\Database\Eloquent\Model;

class ServiceProblemCauses extends Model
{
    protected $table = 'service_problem_causes';

    protected $fillable = [
        'id_problem_group','cause_1_name','cause_2_name'
    ];

 
}
