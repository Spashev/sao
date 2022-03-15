<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmRegionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adm_regions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_region')->nullable();
            $table->string('region_name_en', 200)->nullable();
            $table->string('region_name_ru', 200)->nullable();
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
        Schema::dropIfExists('adm_regions');
    }
}
