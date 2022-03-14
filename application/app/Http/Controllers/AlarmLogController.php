<?php
namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Monitoring\AlarmsLog;

class AlarmLogController extends Controller
{
    public function save(Request $request)
    {

        $data=$request->input();
        $vendor_type=$data['vendor_type'];
        $success=$data['success'];
        $desc=$data['desc'];
        $technology=$data['technology'];
        $model=new AlarmsLog();
        $model->desc=$desc;
        $model->vendor_type=$vendor_type;
        $model->success=$success;
        $model->technology=$technology;
        $model->save();
    }

}