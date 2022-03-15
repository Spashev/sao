<?php

namespace App\Models\TroubleTicket;

use Carbon\Carbon;
use App\User;
use App\Models\TroubleTicket\TroubleTicket;
use App\Models\Scheme\SchemeAction;
use Illuminate\Database\Eloquent\Model;

class TroubleTicketSubticket extends Model
{
    public $fillable = [
        'id_ticket',
        'id_act',
        'source_name',
        'start_date',
        'description',
        'last_comment',
        'status',
        'solver_group',
        'solver_user',
        'solver_cats',
        'created_by'
    ];

    protected $appends = [
        'formatted_created_date',
        'formatted_start_date',
        'action_label'
    ];

    public function getFormattedCreatedDateAttribute() {
        return Carbon::parse($this->created_at)->format('d.m.Y H:i');
    }

    public function getFormattedStartDateAttribute() {
        return Carbon::parse($this->start_date)->format('d.m.Y H:i');
    }

    public function getActionLabelAttribute(){
        $action_label = [];
        $action_label['title'] = $this->action->act_title;
        $action_label['desc'] = $this->action->act_desc;
        return $action_label;
    }

    //protected $with = [ 'user_info', 'action_info'  ];

    public function user_info(){
        return $this->belongsTo(User::class, 'created_by');
    }

    public function ticket_info(){
        return $this->belongsTo(TroubleTicket::class, 'id_ticket');
    }

    public function action(){
        return $this->belongsTo(SchemeAction::class, 'id_act');
    }
    
}
