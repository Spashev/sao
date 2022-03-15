<?php

namespace App\Models\TroubleTicket;

use Carbon\Carbon;
use App\Models\Services\Services;
use App\Models\Services\ServiceInfluenceConditions;
use App\Models\Services\ServiceInfluenceConns;
use App\Models\TroubleTicket\TroubleTicketAlarm;

use Illuminate\Database\Eloquent\Model;

class TroubleTicketService extends Model
{
    public $fillable = [
        'id_ticket',
        'id_service',
        'id_influence',
        'start_date'
    ];

    protected $appends = [
        'formatted_start_date'
    ];

    protected $with = [ 'service_info', 'influence_info', 'influence_options', 'alarms_info' ];

    public function getFormattedStartDateAttribute() {
        return Carbon::parse($this->start_date)->format('d.m.Y H:i');
    }

    public function service_info() {
        return $this->belongsTo(Services::class, 'id_service');
    }

    public function influence_info() {
        return $this->belongsTo(ServiceInfluenceConditions::class, 'id_influence');
    }

    public function influence_options() {
        return $this->hasMany(ServiceInfluenceConns::class, 'id_service', 'id_service');
    }

    public function alarms_info() {
        return $this->hasMany(TroubleTicketAlarm::class, 'id_service');
    }
    
}
