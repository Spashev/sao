<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsAdmSiteHopsSyslogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('adm_site_hops', function (Blueprint $table) {
            $table->tinyInteger('syslog_is_on')->default(0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('adm_site_hops', function (Blueprint $table) {
            $table->dropColumn('syslog_is_on');
        });
    }
}
