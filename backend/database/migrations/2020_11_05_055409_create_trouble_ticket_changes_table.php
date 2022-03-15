<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTroubleTicketChangesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trouble_ticket_changes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_ticket')->index();
            $table->unsignedBigInteger('id_group_changes');
            $table->unsignedBigInteger('field_type');
            $table->string('group_field_label', 200);
            $table->string('group_field_name', 200);
            $table->string('field_label', 200);
            $table->string('field_name', 200);
            $table->unsignedBigInteger('old_field_id')->nullable();
            $table->unsignedBigInteger('new_field_id')->nullable();
            $table->string('old_field_value', 4000);
            $table->string('new_field_value', 4000);
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
        Schema::dropIfExists('trouble_ticket_changes');
    }
}
