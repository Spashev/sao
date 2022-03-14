<?php

namespace App\Models\Services;

use Illuminate\Database\Eloquent\Model;

class ServiceProblemConns extends Model
{
    
    protected $table = 'service_problem_conns';

    protected $fillable = [
        'id_service', 'id_problem_group',
    ];
    protected $with = ['problemGroups','problemCauses'];

    public function problemGroups()
    {
        return $this->belongsTo('App\Models\Services\ServiceProblemGroups', 'id_problem_group');
    }

    public function problemCauses()
    {
        return $this->belongsTo('App\Models\Services\ServiceProblemCauses', 'id_problem_group','id_problem_group');
    }



    
    
}
