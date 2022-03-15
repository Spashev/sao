<?php

namespace App\Http\Controllers;

use App\Models\Services\Services;
use App\Models\Settlements\Settlements;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class ReferenceController extends Controller
{
   
    public function index()
    {
        $services_count = Services::count();
        $services_last = Services::latest()->first();
        $settlements_count = Settlements::count();
        $settlements_last = Settlements::latest()->first();
        return response()->json(['services_count'=>$services_count,'services_last'=>$services_last,'settlements_count'=>$settlements_count,'settlements_last'=>$settlements_last]);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}