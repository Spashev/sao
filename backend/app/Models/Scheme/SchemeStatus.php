<?php


namespace App\Models\Scheme;
use Illuminate\Database\Eloquent\Model;

class SchemeStatus extends Model
{
    protected $table = 'scheme_statuses';

    protected $fillable = [
        'name',
        'comp_id'
    ];

    public function component(){
        return $this->belongsTo(SchemeComponent::class);
    }

    public function actions(){
        return $this->hasMany(SchemeAction::class);
    }
}
