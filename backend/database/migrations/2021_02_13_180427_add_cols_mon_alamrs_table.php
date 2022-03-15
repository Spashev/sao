<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsMonAlamrsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('mon_alarms', function (Blueprint $table) {
            $table->dateTime('date_cleared')->nullable();
            $table->dateTime('date_raised')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('mon_alarms', function (Blueprint $table) {
            $table->dropColumn('date_raised');
            $table->dropColumn('date_cleared');
        });
    }
}
