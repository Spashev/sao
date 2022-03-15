<?php

namespace App\Models\Catalog;

use Illuminate\Database\Eloquent\Model;

class NetworkHardware extends Model
{
    //
    protected $table = 'adm_network_hardware';

    public $fillable = [
        'source_name',
        'network_type'
    ];
}
