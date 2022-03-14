<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettlementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //ID	FK_DISTR	FK_AREA	KATO	NAME_EN	NAME_RU	OBLAST	RAION	OKRUG	DISTRICT_NAME	BDD_NAME	ABBR	POP_2009	CITY_TYPE
        Schema::create('settlements', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_region')->nullable();
            $table->unsignedBigInteger('id_distr')->nullable();
            $table->unsignedBigInteger('id_area')->nullable();
            $table->unsignedBigInteger('kato')->nullable();
            $table->string('name_en', 200)->nullable();
            $table->string('name_ru', 200)->nullable();
            $table->string('oblast', 200)->nullable();
            $table->string('raion', 200)->nullable();
            $table->string('okrug', 200)->nullable();
            $table->string('district', 200)->nullable();
            $table->string('bdd', 200)->nullable();
            $table->string('abbr', 20)->nullable();
            $table->unsignedBigInteger('pop_2009')->nullable();
            $table->unsignedBigInteger('city_type')->nullable();
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
        Schema::dropIfExists('settlements');
    }
}
