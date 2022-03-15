<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsAdmSitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('adm_sites', function (Blueprint $table) {
            $table->tinyInteger('is_root_site')->after('vendor')->default(0)->nullable();
            $table->tinyInteger('site_category')->after('vendor')->default(0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('adm_sites', function (Blueprint $table) {
            $table->dropColumn('is_root_site');
            $table->dropColumn('site_category');
        });
    }
}
