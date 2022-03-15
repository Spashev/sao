<?php

namespace App\Models\Administrative;

use Illuminate\Database\Eloquent\Model;

class SiteHopParent extends Model
{
    //
    protected $table = 'adm_site_hop_parents';

    public $fillable = [
        'id_site_base',
        'level_site',
        'child_cnt',
        'is_active'
    ];

}
