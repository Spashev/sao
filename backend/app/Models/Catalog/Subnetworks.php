<?php

namespace App\Models\Catalog;

use Illuminate\Database\Eloquent\Model;

class Subnetworks extends Model
{
    //
    protected $table = 'subnetworks';

    public $fillable = [
        'network',
        'subnetwork_1',
        'subnetwork_2',
        'subnetwork_3',
        'state',
        'created_by'
    ];

}
