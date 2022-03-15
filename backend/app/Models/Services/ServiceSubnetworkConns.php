<?php

namespace App\Models\Services;

use App\Models\Services\ServiceSubnetworks;
use Illuminate\Database\Eloquent\Model;

class ServiceSubnetworkConns extends Model
{
    protected $table = 'service_subnetwork_conns';

    protected $fillable = ['id_service','id_subnetwork'];

    protected $with = ['subnetwork_info'];

    public function subnetwork_info() {
        return $this->belongsTo(ServiceSubnetworks::class, 'id_subnetwork');
    }

    
}
