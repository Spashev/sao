<?php


namespace App\Models\Scheme;


use Illuminate\Database\Eloquent\Model;

class SchemeUserField extends Model
{
    protected $table = 'scheme_user_fields';

    protected $fillable = [
        'comp_id',
        'cat_id',
        'field_name'
    ];

    public function component(){
        return $this->belongsTo(SchemeComponent::class);
    }

    public function userCategory(){
        return $this->belongsTo(SchemeUserCategory::class);
    }

    public function groupUsers(){
        return $this->belongsToMany('User', 'scheme_user_lists');
    }

    public function userGroups(){
        return $this->belongsToMany('SchemeUserGroup', 'scheme_user_lists');
    }
}
