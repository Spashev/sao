<?php


namespace App\Models\Scheme;


use Illuminate\Database\Eloquent\Model;

class SchemeUserActivity extends Model
{
    protected $table = 'scheme_user_activities';

    protected $fillable = [
        'act_id',
        'group_id',
        'cat_id',
        'act_type',
        'is_user',
        'inform_by'
    ];

    public function action(){
        return $this->belongsTo(SchemeAction::class);
    }

    public function userGroup(){
        return $this->belongsTo(SchemeUserGroup::class);
    }

    public function userCategory(){
        return $this->belongsTo(SchemeUserCategory::class);
    }
}
