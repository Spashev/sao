<?php

namespace App\Models\Monitoring;

use Illuminate\Database\Eloquent\Model;

class AlarmsArchive extends Model
{
    protected $table = 'mon_alarms_arch';

    protected $fillable = ["id_vendor","id_subtype","id_region","id_severity","id_severity_vendor","fault_code","technology","vendor","network","network_element","source_element","source_type","source_name","fault_name","fault_text_1","fault_text_2"];

}