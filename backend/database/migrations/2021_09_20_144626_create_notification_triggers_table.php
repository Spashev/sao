<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificationTriggersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notification_triggers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_priority')->default(0)->nullable();
            $table->unsignedBigInteger('id_region')->default(0)->nullable();
            $table->unsignedBigInteger('id_tt_type')->default(0)->nullable();
            $table->unsignedBigInteger('id_network')->default(0)->nullable();
            $table->unsignedBigInteger('id_subnetwork')->default(0)->nullable();
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
        Schema::dropIfExists('notification_triggers');
    }
}
