<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTroubleTicketAlarmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trouble_ticket_alarms', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_tts')->nullable()->index();
            $table->unsignedBigInteger('id_alarm')->nullable()->index();
            $table->unsignedBigInteger('id_alarm_subtype')->nullable()->index();
            $table->string('source_name', 256);
            $table->string('fault_name', 512);
            $table->dateTime('date_raised')->nullable();
            $table->dateTime('date_cleared')->nullable();
            $table->boolean('is_source')->default(false)->nullable();
            $table->timestamps();

            $table->foreign('id_tts')->references('id')->on('trouble_tickets')->onDelete('restrict');
            $table->foreign('id_alarm')->references('id')->on('mon_alarms')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trouble_ticket_alarms');
    }
}
