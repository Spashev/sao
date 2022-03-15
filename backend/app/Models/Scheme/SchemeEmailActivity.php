<?php


namespace App\Models\Scheme;


use Illuminate\Database\Eloquent\Model;

class SchemeEmailActivity extends Model
{
    protected $table = 'scheme_email_activities';

    protected $fillable = [
        'act_id',
        'email'
    ];

    public function action(){
        return $this->belongsTo(SchemeAction::class);
    }
}
