<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsTroubleTicketSubticketTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('trouble_ticket_subtickets', function (Blueprint $table) {
            $table->integer('solver_user')->after('status')->default(0);
            $table->integer('solver_group')->after('status')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('trouble_ticket_subtickets', function (Blueprint $table) {
            $table->dropColumn(['solver_user']);
            $table->dropColumn(['solver_group']);
        });
    }
}
