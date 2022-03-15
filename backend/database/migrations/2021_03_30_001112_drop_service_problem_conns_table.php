<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropServiceProblemConnsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('service_problem_conns');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('service_problem_conns', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_service')->index();
            $table->unsignedBigInteger('id_problem_group')->index();
            $table->timestamps();
        });
    }
}
