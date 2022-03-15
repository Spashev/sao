<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsTroubleTicketCreatedByTable extends Migration
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
            $table->unsignedBigInteger('created_by')->after('last_comment')->nullable()->index();

            $table->foreign('created_by')->references('id')->on('users')->onDelete('restrict');
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
            $table->dropColumn('created_by');
        });
    }
}
