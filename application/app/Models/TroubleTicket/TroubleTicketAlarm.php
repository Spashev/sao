<?php

namespace App\Models\TroubleTicket;

use Carbon\Carbon;

use Illuminate\Database\Eloquent\Model;

class TroubleTicketAlarm extends Model
{
    public $fillable = [
        'id_tts',
        'id_service',
        'id_alarm',
        'id_alarm_subtype',
        'source_name',
        'fault_name',
        'date_raised'
    ];

    protected $appends = [
        'formatted_date_raised',
        'formatted_date_cleared'
    ];

    public function getFormattedDateRaisedAttribute() {
        return Carbon::parse($this->date_raised)->format('d.m.Y H:i');
    }

    public function getFormattedDateClearedAttribute() {
        $date = null;

        if($this->date_cleared)
        $date = Carbon::parse($this->date_cleared)->format('d.m.Y H:i');

        return $date;
    }
    
}
