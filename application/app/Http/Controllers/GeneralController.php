<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GeneralController extends Controller
{
    /**
     * Запрос данных по приложениям
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response  Возвращает массив с данными
     */
    public function getApplication(Request $request)
    {
        $id = json_decode($request['id']) ?? null;
        if (isset($id)) {
            $id = is_array($id) ? $id : [$id];
        }
        // TODO Перенести запрос в модель
        $data = \DB::table('applications')->select('id', 'name', 'link', 'description')->whereNull('deleted_at');
        is_null($id) ?: $data->whereIn('id', $id);
        return response()->json($data->orderBy('id')->get(), 200);
    }
}
