<?php

namespace App\Models\Services;

use Illuminate\Database\Eloquent\Model;

class ServiceSubnetworks extends Model
{
    protected $table = 'service_subnetworks';

    protected $fillable = ['network','subnetwork_1'];
 
}
