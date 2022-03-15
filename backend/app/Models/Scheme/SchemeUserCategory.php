<?php


namespace App\Models\Scheme;


use Illuminate\Database\Eloquent\Model;

class SchemeUserCategory extends Model
{
    protected $table = 'scheme_user_cats';

    protected $fillable = [
        'comp_id',
        'cat_name'
    ];

    public function component(){
        return $this->belongsTo(SchemeComponent::class);
    }

    public function userFields(){
        return $this->hasMany(SchemeUserField::class);
    }

    public function userActivity(){
        return $this->hasMany(SchemeUserActivity::class);
    }
}
