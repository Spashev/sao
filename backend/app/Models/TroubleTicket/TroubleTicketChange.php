<?php

namespace App\Models\TroubleTicket;

use Carbon\Carbon;
use App\User;
use Illuminate\Database\Eloquent\Model;

class TroubleTicketChange extends Model
{
    public $fillable = [
        'id_ticket',
        'id_group_changes',
        'field_type',
        'group_field_label',
        'group_field_name',
        'field_label',
        'field_name',
        'old_field_id',
        'new_field_id',
        'old_field_value',
        'new_field_value',
        'created_by'
    ];

    protected $appends = [
        'formatted_created_date', 
        'created_user'
    ];

    public function getFormattedCreatedDateAttribute() {
        return Carbon::parse($this->created_at)->format('d.m.Y H:i');
    }

    public function getCreatedUserAttribute() {
        return $this->user_info->name;
    }

    //protected $with = [ 'user_info', 'action_info'  ];

    public function user_info() {
        return $this->belongsTo(User::class, 'created_by');
    }
    
    
}
