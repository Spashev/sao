<?php

namespace App\Models\Monitoring;

use Illuminate\Database\Eloquent\Model;

use App\Models\Monitoring\AlarmSubtypes;

class Alarms extends Model
{
    protected $table = 'mon_alarms';

    protected $fillable = ["id_vendor","id_subtype","id_region","id_severity","id_severity_vendor","fault_code","technology","vendor","network","network_element","source_element","source_type","source_name","fault_name","fault_text_1","fault_text_2"];
    
    protected $appends = [
        'subtype_name'
    ];

    public function getSubtypeNameAttribute(){
        $label = $this->subtypes->title;
        return $label;
    }
    

    public function subtypes() {
        return $this->belongsTo(AlarmSubtypes::class, 'id_subtype','id_subtype');
    }
}