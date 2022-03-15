<?php

namespace App\Http\Controllers;


use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        if($request->file('file'))
        {
            $destinationPath='../storage/app';
            $originalName=$request->file('file')->getClientOriginalName();
            $file = $request->file('file')->move($destinationPath,$originalName);
        }
    }

}
  