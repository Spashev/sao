<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsAdmSiteHopSlotReservedLinkTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('adm_site_hop_slots', function (Blueprint $table) {
            $table->tinyInteger('is_reserved_link')->after('is_active')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('adm_site_hop_slots', function (Blueprint $table) {
            $table->dropColumn('is_reserved_link');
        });
    }
}
