<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceSubnetworksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_subnetworks', function (Blueprint $table) {
            $table->id();
            $table->string('network', 64);
            $table->string('subnetwork_1', 256);
            $table->string('subnetwork_2', 256);
            $table->string('subnetwork_3', 256);
            $table->tinyInteger('state')->default(1)->nullable();
            $table->unsignedBigInteger('created_by')->nullable();// #added
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_subnetworks');
    }
}
