<?php


namespace App\Models\Scheme;


use Illuminate\Database\Eloquent\Model;

class SchemeUserList extends Model
{
    protected $table = 'scheme_user_lists';
    protected $primaryKey = null;

    public $incrementing = false;

    protected $fillable = [
        "user_id", "group_id", "field_id", "is_email", "is_admin"
    ];
}
