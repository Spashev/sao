<?php


namespace App\Models\Scheme;


use Illuminate\Database\Eloquent\Model;

class SchemeFieldList extends Model
{
    protected $table = 'scheme_field_lists';

    protected $fillable = [
        'act_id',
        'field_id',
        'user_cat_id',
        'user_field_id',
        'is_basic',
        'field_type',
        'field_ord',
        'query_type',
        'query_select',
        'query_db',
        'query_value',
        'cond_show',
        'cond_alert',
        'default_vals',
        'is_req'
    ];

    public function action(){
        return $this->belongsTo(SchemeAction::class);
    }

    public function field(){
        return $this->belongsTo(SchemeField::class);
    }
}
