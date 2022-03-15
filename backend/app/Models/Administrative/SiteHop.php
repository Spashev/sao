<?php

namespace App\Models\Administrative;

use Illuminate\Database\Eloquent\Model;

class SiteHop extends Model
{
    //
    protected $table = 'adm_site_hops';

    public $fillable = [
        'ip_hop',
        'hop_name',
        'site_name',
        'baseline',
        'is_parent',
        'is_active'
    ];

}
