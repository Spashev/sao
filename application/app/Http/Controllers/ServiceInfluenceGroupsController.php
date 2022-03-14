<?php

namespace App\Http\Controllers;

use App\Models\Services\ServiceInfluenceGroups;
use Illuminate\Http\Request;

class ServiceInfluenceGroupsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $list=ServiceInfluenceGroups::All();
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
        $model=new ServiceInfluenceGroups();
        $model->fill($request->input('form'));
        $model->save();
        return response()->json(['object'=>$model]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ServiceInfluenceGroups  $serviceInfluenceGroups
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceInfluenceGroups $serviceInfluenceGroups)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ServiceInfluenceGroups  $serviceInfluenceGroups
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceInfluenceGroups $serviceInfluenceGroups)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ServiceInfluenceGroups  $serviceInfluenceGroups
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ServiceInfluenceGroups $serviceInfluenceGroups)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ServiceInfluenceGroups  $serviceInfluenceGroups
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceInfluenceGroups $serviceInfluenceGroups)
    {
        //
    }
}
