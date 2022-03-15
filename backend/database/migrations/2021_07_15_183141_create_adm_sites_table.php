<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmSitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adm_sites', function (Blueprint $table) {
            $table->id();
            $table->string('id_site', 100)->nullable();
            $table->string('site_name', 100)->index();
            $table->string('site_type', 30)->nullable();
            $table->unsignedBigInteger('kato')->index();
            $table->string('address', 2000)->nullable();
            $table->string('vendor', 30)->nullable();
            $table->tinyInteger('cell_cnt_2g')->default(0)->nullable();
            $table->tinyInteger('cell_cnt_3g')->default(0)->nullable();
            $table->tinyInteger('cell_cnt_4g')->default(0)->nullable();
            $table->date('on_air_date_2g')->nullable();
            $table->date('on_air_date_3g')->nullable();
            $table->date('on_air_date_4g')->nullable();
            $table->timestamps();

            //$table->foreign('kato')->references('kato')->on('adm_settlements')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('adm_sites');
    }
}
