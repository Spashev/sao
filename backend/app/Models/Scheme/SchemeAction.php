<?php

namespace App\Models\Scheme;

use App\Models\Crud;
use Illuminate\Database\Eloquent\Model;

class SchemeAction extends Model
{
    protected $table = 'scheme_actions';

    protected $fillable = ["comp_id", "par_act_id", "back_act_id", "status_id", "act_title", "act_desc", "enabled", "created_by"];

    protected $appends = [
        'status_name'
    ];

    public function getStatusNameAttribute() {
        return $this->status;
    }

    public function component(){
        return $this->belongsTo(SchemeComponent::class);
    }

    public function parentParAction(){
        return $this->belongsTo('SchemeAction', 'par_act_id');
    }

    public function childParActions(){
        return $this->hasMany('SchemeAction', 'par_act_id');
    }

    public function parentBackAction(){
        return $this->belongsTo('SchemeAction', 'back_act_id');
    }

    public function childBackActions(){
        return $this->hasMany('SchemeAction', 'back_act_id');
    }

    public function status(){
        return $this->belongsTo(SchemeStatus::class);
    }

    public function userActivities(){
        return $this->hasMany(SchemeUserActivity::class);
    }

    public function emailActivities(){
        return $this->hasMany(SchemeUserActivity::class);
    }

    public function fieldLists(){
        return $this->hasMany(SchemeFieldList::class);
    }

    public function cruds(){
        return $this->hasMany(Crud::class);
    }
}
