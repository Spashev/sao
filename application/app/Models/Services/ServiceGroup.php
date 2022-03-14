<?php

namespace App\Models\Services;

use Illuminate\Database\Eloquent\Model;
use App\Models\Services\Services;

class ServiceGroup extends Model
{

    public function services()
    {
        //show all services for group
        return $this->hasMany(Services::class,'id_service_group','id');
    }
}
