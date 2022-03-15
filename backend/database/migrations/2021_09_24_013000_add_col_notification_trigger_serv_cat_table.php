<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColNotificationTriggerServCatTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('notification_triggers', function (Blueprint $table) {
            $table->tinyInteger('id_serv_cat')->after('id_tt_type')->default(0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('notification_triggers', function (Blueprint $table) {
            $table->dropColumn('id_serv_cat');
        });
    }
}
