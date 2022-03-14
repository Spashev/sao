<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmNetworkHardwareTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adm_network_hardware', function (Blueprint $table) {
            $table->id();
            $table->string('source_name', 50)->index();
            $table->string('source_ip', 20)->nullable();
            $table->unsignedBigInteger('network_type');
            $table->unsignedBigInteger('settlement_id')->nullable();
            $table->string('model_name', 100)->nullable();
            $table->string('responsible_group', 100)->nullable();
            $table->tinyInteger('is_active')->default(1)->nullable();
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
        Schema::dropIfExists('adm_network_hardware');
    }
}
