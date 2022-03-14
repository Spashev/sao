<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTriggerTroubleTicketTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trigger_trouble_ticket', function (Blueprint $table) {
            $table->id();
            $table->string('trigger_name', 50)->index();
            $table->string('alarm_from', 100)->nullable();
            $table->unsignedBigInteger('action_id');
            $table->unsignedBigInteger('tt_type');
            $table->unsignedBigInteger('service');
            $table->unsignedBigInteger('service_influence');
            $table->unsignedBigInteger('affection');
            $table->unsignedBigInteger('influence');
            $table->unsignedBigInteger('network_type');
            $table->unsignedBigInteger('prob_cause');
            $table->string('description', 200)->nullable();
            $table->tinyInteger('network_type_from')->default(0)->nullable(); // 1 - from request; 2 - from library 
            $table->tinyInteger('kato_from')->default(0)->nullable(); // 1 - from request; 2 - from library 
            $table->tinyInteger('is_active')->default(1)->nullable();
            $table->unsignedBigInteger('created_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trigger_trouble_ticket');
    }
}
