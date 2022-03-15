<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmSiteHopSlotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adm_site_hop_slots', function (Blueprint $table) {
            $table->id();
            $table->string('slot', 20)->nullable();
            $table->string('ip_base', 20)->index();
            $table->string('ip_first', 20)->nullable();
            $table->string('ip_second', 20)->nullable();
            $table->tinyInteger('is_active')->default(1)->nullable();
            $table->timestamps();

            //$table->foreign('ip_base')->references('ip_hop')->on('adm_site_hops')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('adm_site_hop_slots');
    }
}
