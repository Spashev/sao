<?php

namespace App\Models\Administrative;

use Illuminate\Database\Eloquent\Model;

class SiteHopSlot extends Model
{
    //
    protected $table = 'adm_site_hop_slots';

    public $fillable = [
        'ip_base', 'is_reserved_link'
    ];

}
