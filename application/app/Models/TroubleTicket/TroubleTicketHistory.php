<?php

namespace App\Models\TroubleTicket;

use Carbon\Carbon;
use App\User;
use App\Models\Scheme\SchemeAction;
use Illuminate\Database\Eloquent\Model;

class TroubleTicketHistory extends Model
{
    public $fillable = [
        'id_ticket',
        'id_subticket',
        'action_type',
        'id_act',
        'action_name',
        'action_type_name',
        'comment',
        'created_by'
    ];

    protected $appends = [
        'formatted_created_date'
    ];

    public function getFormattedCreatedDateAttribute() {
        return Carbon::parse($this->created_at)->format('d.m.Y H:i');
    }

    //protected $with = [ 'user_info', 'action_info'  ];

    public function user_info() {
        return $this->belongsTo(User::class, 'created_by');
    }
    
}
