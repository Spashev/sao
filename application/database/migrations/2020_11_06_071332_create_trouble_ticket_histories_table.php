<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTroubleTicketHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trouble_ticket_histories', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_ticket')->index();
            $table->unsignedBigInteger('action_type');
            $table->unsignedBigInteger('id_act')->nullable();
            $table->string('action_name', 200);
            $table->string('action_type_name', 200);
            $table->string('comment', 4000);
            $table->unsignedBigInteger('created_by')->index();
            $table->timestamps();

            $table->foreign('id_ticket')->references('id')->on('trouble_tickets')->onDelete('restrict');
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
        Schema::dropIfExists('trouble_ticket_histories');
    }
}
