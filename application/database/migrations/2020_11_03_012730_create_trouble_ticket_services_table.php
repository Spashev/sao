<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTroubleTicketServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trouble_ticket_services', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_ticket')->index();
            $table->unsignedBigInteger('id_service')->index();
            $table->unsignedBigInteger('id_influence')->index();
            $table->dateTime('start_date', 0);
            $table->dateTime('finish_date', 0)->nullable();
            $table->unsignedBigInteger('created_by');
            $table->timestamps();

            $table->foreign('id_ticket')->references('id')->on('trouble_tickets')->onDelete('restrict');
            $table->foreign('id_service')->references('id')->on('services')->onDelete('restrict');
            $table->foreign('id_influence')->references('id')->on('service_influence_conditions')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trouble_ticket_services');
    }
}
