<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsTroubleTicketNeedInformTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('trouble_tickets', function (Blueprint $table) {
            $table->tinyInteger('need_inform')->default(0)->nullable();
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
        Schema::table('trouble_tickets', function (Blueprint $table) {
            $table->dropColumn('need_inform');
        });
    }
}
