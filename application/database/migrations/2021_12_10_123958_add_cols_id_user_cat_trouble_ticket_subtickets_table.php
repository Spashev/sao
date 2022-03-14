<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsIdUserCatTroubleTicketSubticketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('trouble_ticket_subtickets', function (Blueprint $table) {
            $table->integer('solver_cats')->default(null)->nullable();
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
            $table->dropColumn('solver_cats');
        });
    }
}
