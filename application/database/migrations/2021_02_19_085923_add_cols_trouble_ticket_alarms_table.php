<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsTroubleTicketAlarmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('trouble_ticket_alarms', function (Blueprint $table) {
            $table->unsignedBigInteger('id_service')->after('id_tts')->nullable()->index();

            $table->foreign('id_service')->references('id')->on('trouble_ticket_services')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('trouble_ticket_alarms', function (Blueprint $table) {
            $table->dropColumn('id_service');
        });
    }
}
