<?php

namespace App\Models\Services;

use Illuminate\Database\Eloquent\Model;

class ServicePriorities extends Model
{
    protected $table = 'service_priorities';

    protected $fillable = [
        'id_service','id_influence','id_city_type', 'id_priority'
    ];

    protected $appends = [
        'priority_name'
    ];
 
    public function getPriorityNameAttribute(){
        if($this->id_priority == 1) $label = 'Emergency';
        if($this->id_priority == 2) $label = 'Critical';
        if($this->id_priority == 3) $label = 'High';
        if($this->id_priority == 4) $label = 'Medium';
        if($this->id_priority == 5) $label = 'Low';
        
        return $label;
    }
}
