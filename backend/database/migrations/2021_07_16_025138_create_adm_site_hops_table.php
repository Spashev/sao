<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmSiteHopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adm_site_hops', function (Blueprint $table) {
            $table->id();
            $table->string('ip_hop', 100)->index();
            $table->string('hop_name', 100)->nullable();
            $table->string('site_name', 100)->index();
            $table->string('baseline', 150)->nullable();
            $table->tinyInteger('is_parent')->default(0)->nullable();
            $table->tinyInteger('is_active')->default(1)->nullable();
            $table->timestamps();

            //$table->foreign('site_name')->references('site_name')->on('adm_sites')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('adm_site_hops');
    }
}
