<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsAdmSitesCoordinatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('adm_sites', function (Blueprint $table) {
            $table->float('lats', 2, 6)->after('vendor')->default(0)->nullable();
            $table->float('lngs', 2, 6)->after('vendor')->default(0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('adm_sites', function (Blueprint $table) {
            $table->dropColumn('lats');
            $table->dropColumn('lngs');
        });
    }
}
