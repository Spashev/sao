<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmDistrictsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adm_districts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_district')->index();
            $table->string('district_name_en', 200)->nullable();
            $table->string('district_name_ru', 200)->nullable();
            $table->string('bdd_name_en', 200)->nullable();
            $table->string('bdd_name_ru', 200)->nullable();
            $table->string('abbr', 10)->nullable();
            $table->string('code', 10)->nullable();
            $table->string('vendor', 20)->nullable();
            $table->float('lat',3,6)->nullable();
            $table->float('lon',3,6)->nullable();
            $table->tinyInteger('enabled')->default(1)->nullable();
            $table->tinyInteger('show_in_gui')->default(1)->nullable();
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
        Schema::dropIfExists('adm_districts');
    }
}
