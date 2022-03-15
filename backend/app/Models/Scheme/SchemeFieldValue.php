<?php


namespace App\Models\Scheme;


use Illuminate\Database\Eloquent\Model;

class SchemeFieldValue extends Model
{
    protected $table = 'scheme_field_values';

    protected $fillable = [
        'id_field',
        'field_value',
        'date_created',
        'created_by'
    ];

    public function field(){
        return $this->belongsTo(SchemeField::class);
    }
}
