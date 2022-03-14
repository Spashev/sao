<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceSubnetworkConnsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_subnetwork_conns', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_service')->index();
            $table->unsignedBigInteger('id_subnetwork')->index();
            $table->tinyInteger('conn_type')->default(0)->nullable();
            $table->timestamps();

            $table->foreign('id_service')->references('id')->on('services')->onDelete('restrict');
            $table->foreign('id_subnetwork')->references('id')->on('service_subnetworks')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations. 
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_subnetwork_conns');
    }
}
