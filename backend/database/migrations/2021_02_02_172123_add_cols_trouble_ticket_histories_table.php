<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsTroubleTicketHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('trouble_ticket_histories', function (Blueprint $table) {
            $table->integer('id_subticket')->after('id_ticket')->default(0);
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
        Schema::table('trouble_ticket_histories', function (Blueprint $table) {
            $table->dropColumn('id_subticket');
        });
    }
}
