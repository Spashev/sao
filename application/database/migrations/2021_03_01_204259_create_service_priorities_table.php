<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicePrioritiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_priorities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_service')->index();
            $table->unsignedBigInteger('id_influence')->index();
            $table->unsignedBigInteger('id_city_type')->index();
            $table->unsignedBigInteger('id_priority')->nullable();
            $table->unsignedBigInteger('created_by')->index();
            $table->timestamps();

            $table->foreign('id_service')->references('id')->on('services')->onDelete('restrict');
            $table->foreign('id_influence')->references('id')->on('service_influence_conditions')->onDelete('restrict');
            
            $table->foreign('created_by')->references('id')->on('users')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_priorities');
    }
}
