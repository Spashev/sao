<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmSiteHopParentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adm_site_hop_parents', function (Blueprint $table) {
            $table->id();
            $table->string('id_site_base', 20)->index();
            $table->string('id_site_parent', 20)->nullable();
            $table->string('id_site_main_parent', 20)->nullable();
            $table->tinyInteger('level_site')->default(1)->nullable();
            $table->unsignedBigInteger('child_cnt')->default(0)->nullable();
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
        Schema::dropIfExists('adm_site_hop_parents');
    }
}
