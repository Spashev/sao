<?php

namespace App\Models\Monitoring;

use Illuminate\Database\Eloquent\Model;

class AlarmSubtypes extends Model
{
    protected $table = 'subtypes';

    protected $fillable = ["id_subtype","title"];

}