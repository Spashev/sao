<?php

namespace App\Models\Notification;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;


class NotificationTrigger extends Model
{
    protected $table = 'notification_triggers';

    public $fillable = [
        'id_priority',
        'id_region',
        'id_tt_type',
        'id_serv_cat'
    ];

    protected $appends = [
        'priority_name',
        'tt_type_name',
        'network_type_name',
        'region_name'
    ];

    public function getPriorityNameAttribute() {
        $priority_name = 'По всем';
        switch ($this->id_priority) {
            case 1:
                $priority_name = 'Только Emergency';
                break;
            case 2:
                $priority_name = 'Critical и выше';
                break;
            case 3:
                $priority_name = 'High и выше';
                break;
            case 4:
                $priority_name = 'Medium и выше';
                break;
            case 5:
                $priority_name = 'Low и выше';
                break;
            case 0:
                $priority_name = 'По всем';
                break;
        }
        return $priority_name;
    }

    public function getTtTypeNameAttribute() {
        $tt_type_name = 'По всем';
        switch ($this->id_tt_type) {
            case 1:
                $tt_type_name = 'Только События';
                break;
            case 2:
                $tt_type_name = 'Только Инциденты';
                break;
            case 0:
                $tt_type_name = 'По всем';
                break;
        }
        return $tt_type_name;
    }

    public function getNetworkTypeNameAttribute() {
        $network_type_name = 'По всем';
        switch ($this->id_network) {
            case 1:
                $network_type_name = 'Только Telco';
                break;
            case 2:
                $network_type_name = 'Только IT';
                break;
            case 0:
                $network_type_name = 'По всем';
                break;
        }
        return $network_type_name;
    }

    public function getRegionNameAttribute() {
        $region_name = 'По всем';
        switch ($this->id_region) {
            case 1:
                $region_name = 'Almaty';
                break;
            case 2:
                $region_name = 'South';
                break;
            case 3:
                $region_name = 'North';
                break;
            case 4:
                $region_name = 'West';
                break;
            case 7:
                $region_name = 'East';
                break;
            case 8:
                $region_name = 'Astana';
                break;
            case 0:
                $region_name = 'По всем';
                break;
        }
        return $region_name;
    }
    
}
