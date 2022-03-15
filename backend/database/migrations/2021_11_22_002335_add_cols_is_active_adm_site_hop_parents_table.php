<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsIsActiveAdmSiteHopParentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('adm_site_hop_parents', function (Blueprint $table) {
            $table->tinyInteger('is_active')->default(1)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('adm_site_hop_parents', function (Blueprint $table) {
            $table->dropColumn('is_active');
        });
    }
}
