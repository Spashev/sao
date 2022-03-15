<?php


namespace App\Models\Scheme;


use Illuminate\Database\Eloquent\Model;

class SchemeUserGroup extends Model
{
    protected $table = 'scheme_user_groups';

    protected $fillable = [
        'comp_id',
        'group_name',
        'channel',
        'enabled'
    ];

    public function component(){
        return $this->belongsTo(SchemeComponent::class);
    }

    public function userFields(){
        return $this->belongsToMany('SchemeUserField', 'scheme_user_lists');
    }

    public function groupUsers(){
        return $this->belongsToMany('User', 'scheme_user_lists');
    }

    public function userActivity(){
        return $this->hasMany(SchemeUserActivity::class);
    }
}
