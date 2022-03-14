<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmSettlementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adm_settlements', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_region')->index();
            $table->unsignedBigInteger('id_district')->index();
            $table->unsignedBigInteger('kato')->unique();
            $table->string('settlement_name_en', 200)->nullable();
            $table->string('settlement_name_ru', 200)->nullable();
            $table->string('raion', 200)->nullable();
            $table->string('okrug', 200)->nullable();
            $table->float('lat',3,6)->nullable();
            $table->float('lon',3,6)->nullable();
            $table->unsignedBigInteger('pop_2009')->nullable();
            $table->unsignedBigInteger('city_type')->nullable();
            $table->timestamps();

            //$table->foreign('id_region')->references('id_region')->on('adm_regions')->onDelete('restrict');
            //$table->foreign('id_district')->references('id_district')->on('adm_districts')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('adm_settlements');
    }
}
