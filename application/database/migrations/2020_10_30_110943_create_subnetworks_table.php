<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubnetworksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subnetworks', function (Blueprint $table) {
            $table->id();
            $table->string('network', 64);
            $table->string('subnetwork_1', 64);
            $table->string('subnetwork_2', 64);
            $table->string('subnetwork_3', 64);
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
        Schema::dropIfExists('subnetworks');
    }
}
