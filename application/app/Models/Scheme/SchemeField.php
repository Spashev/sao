<?php


namespace App\Models\Scheme;


use Illuminate\Database\Eloquent\Model;

class SchemeField extends Model
{
    protected $table = 'scheme_fields';

    protected $fillable = [
        'comp_id',
        'field_label',
        'field_name',
        'field_ord',
        'field_type',
        'query_type',
        'query_select',
        'query_db',
        'query_value2',
        'cond_show',
        'cond_alert',
        'default_vals',
        'is_req',
        'parent',
        'dependent',
        'style_type',
        'field_col',
        'style_class',
        'is_readonly',
        'change_func',
        'max_length',
        'min_length',
        'query_value'
    ];

    public function component(){
        return $this->belongsTo(SchemeComponent::class);
    }

    public function fieldValues(){
        return $this->hasMany(SchemeFieldValue::class);
    }

    public function fieldLists(){
        return $this->hasMany(SchemeFieldList::class);
    }
}
