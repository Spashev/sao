<?php

namespace App\Http\Controllers;

use App\Models\Services\ServiceProblemCauses;
use Illuminate\Http\Request;

class ServiceProblemCausesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $model=new ServiceProblemCauses();
        $model->fill($request->input('form'));
        $model->save();
        return response()->json(['object'=>$model]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ServiceProblemCauses  $serviceProblemCauses
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceProblemCauses $serviceProblemCauses)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ServiceProblemCauses  $serviceProblemCauses
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceProblemCauses $serviceProblemCauses)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ServiceProblemCauses  $serviceProblemCauses
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ServiceProblemCauses $serviceProblemCauses)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ServiceProblemCauses  $serviceProblemCauses
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceProblemCauses $serviceProblemCauses)
    {
        //
    }
}
