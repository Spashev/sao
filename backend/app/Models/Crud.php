<?php

namespace App\Models;

use App\Models\Scheme\SchemeAction;
use Illuminate\Database\Eloquent\Model;

class Crud extends Model
{
    public $fillable = ['title', 'description', 'action_id'];

    public function action(){
        return $this->belongsTo(SchemeAction::class);
    }
}
