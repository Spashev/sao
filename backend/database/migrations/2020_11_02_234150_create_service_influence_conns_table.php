<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceInfluenceConnsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_influence_conns', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_service')->index();
            $table->unsignedBigInteger('id_service_influence')->index();
            $table->tinyInteger('state')->default(1)->nullable();
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
        Schema::dropIfExists('service_influence_conns');
    }
}
