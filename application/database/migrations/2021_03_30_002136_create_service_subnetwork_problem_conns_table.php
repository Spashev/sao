<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceSubnetworkProblemConnsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_subnetwork_problem_conns', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_subnetwork')->index();
            $table->unsignedBigInteger('id_problem')->index();
            $table->tinyInteger('conn_type')->default(0)->nullable();
            $table->timestamps();

            $table->foreign('id_subnetwork')->references('id')->on('service_subnetworks')->onDelete('restrict');
            $table->foreign('id_problem')->references('id')->on('service_problem_causes')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_subnetwork_problem_conns');
    }
}
