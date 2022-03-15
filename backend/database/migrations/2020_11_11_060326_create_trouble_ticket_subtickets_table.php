<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTroubleTicketSubticketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trouble_ticket_subtickets', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_ticket')->index();
            $table->unsignedBigInteger('id_act')->index();
            $table->string('source_name',1000);
            $table->dateTime('start_date', 0);
            $table->dateTime('finish_date', 0)->nullable();
            $table->string('description', 4000);
            $table->string('last_comment', 2000);
            $table->unsignedBigInteger('status');
            $table->unsignedBigInteger('created_by')->index();
            $table->timestamps();

            $table->foreign('id_ticket')->references('id')->on('trouble_tickets')->onDelete('restrict');
            $table->foreign('id_act')->references('id')->on('scheme_actions')->onDelete('restrict');
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
        Schema::dropIfExists('trouble_ticket_subtickets');
    }
}
