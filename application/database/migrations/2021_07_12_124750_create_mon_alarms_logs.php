<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMonAlarmsLogs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('mon_alarms_logs')) {
            Schema::create('mon_alarms_logs', function ($table) {
                $table->id();
                $table->string('desc', 256);
                $table->tinyInteger('success')->default(0);
                $table->string('technology', 256);
                $table->string('vendor_type', 256)->default(0);
                $table->timestamps();

            
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mon_alarms_logs');
    }
}
