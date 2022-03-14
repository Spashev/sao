<?php

namespace App\Http\Controllers;

use App\Models\Services\ServiceInfluenceConditions;
use Illuminate\Http\Request;

class ServiceInfluenceConditionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $list=ServiceInfluenceConditions::All();
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
        $model=new ServiceInfluenceConditions();
        $model->fill($request->input('form'));
        $model->save();
        return response()->json(['object'=>$model]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ServiceInfluenceConditions  $serviceInfluenceConditions
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceInfluenceConditions $serviceInfluenceConditions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ServiceInfluenceConditions  $serviceInfluenceConditions
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceInfluenceConditions $serviceInfluenceConditions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ServiceInfluenceConditions  $serviceInfluenceConditions
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ServiceInfluenceConditions $serviceInfluenceConditions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ServiceInfluenceConditions  $serviceInfluenceConditions
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceInfluenceConditions $serviceInfluenceConditions)
    {
        //
    }
}
