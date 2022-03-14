<?php

namespace App\Models\TroubleTicket;

use App\Models\Scheme\SchemeAction;
use Illuminate\Database\Eloquent\Model;

class TroubleTicketCity extends Model
{
    public $fillable = [
        'id_ticket',
        'id_city',
        'city_name'
    ];
    
    
}
