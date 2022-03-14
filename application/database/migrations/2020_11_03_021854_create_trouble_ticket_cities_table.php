<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTroubleTicketCitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trouble_ticket_cities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_ticket')->index();
            $table->unsignedBigInteger('id_settlement')->index();
            $table->string('city_name', 500);
            $table->timestamps();

            $table->foreign('id_ticket')->references('id')->on('trouble_tickets')->onDelete('restrict');
            $table->foreign('id_settlement')->references('id')->on('settlements')->onDelete('restrict');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trouble_ticket_cities');
    }
}
