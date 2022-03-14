<?php

namespace App\Http\Controllers;

use App\Models\Services\ServiceGroup;
use Illuminate\Http\Request;

class ServiceGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $list=ServiceGroup::with('services')->get();
        return response()->json(['list'=>$list]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $model=new ServiceGroup();
        $model->group_name=$request->input('group_name');
        $model->save();
        return response()->json(['object'=>$model]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ServiceGroup  $serviceGroup
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceGroup $serviceGroup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ServiceGroup  $serviceGroup
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceGroup $serviceGroup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ServiceGroup  $serviceGroup
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ServiceGroup $serviceGroup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ServiceGroup  $serviceGroup
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceGroup $serviceGroup)
    {
        //
    }
}
