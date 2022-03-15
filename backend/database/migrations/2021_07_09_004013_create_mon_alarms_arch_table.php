<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMonAlarmsArchTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

       

        if (!Schema::hasTable('mon_alarms_arch')) {
            Schema::create('mon_alarms_arch', function ($table) {
                $table->id();
                $table->unsignedBigInteger('id_vendor')->nullable();
                $table->unsignedBigInteger('id_subtype')->nullable();//->index();
                $table->unsignedBigInteger('id_region')->nullable();//->index();
                $table->integer('id_severity')->nullable();
                $table->integer('id_severity_vendor')->nullable();
                $table->unsignedBigInteger('fault_code')->nullable();
                $table->string('technology', 256);
                $table->string('vendor', 256);
                $table->string('network', 256);
                $table->string('network_element', 256);
                $table->string('source_element', 256);
                $table->string('source_type', 256);
                $table->string('source_name', 256);
                $table->string('fault_name', 512)->nullable();
                $table->string('fault_text_1', 4000)->nullable();
                $table->string('fault_text_2', 4000)->nullable();
                $table->unsignedBigInteger('id_trouble')->nullable()->index();
                $table->unsignedBigInteger('id_parent_alarm')->nullable()->index();
                $table->tinyInteger('is_active')->default(1);
                $table->tinyInteger('is_group')->default(0);
                $table->dateTime('date_cleared')->nullable();
                $table->dateTime('date_raised')->nullable();
                $table->string('vendor_type', 256)->default(0);
                $table->timestamps();

                //$table->foreign('id_subtype')->references('id_subtype')->on('adm_alarm_subtypes')->onDelete('restrict');
                $table->foreign('id_trouble')->references('id')->on('trouble_tickets')->onDelete('restrict');
                $table->foreign('id_parent_alarm')->references('id')->on('mon_alarms_arch')->onDelete('restrict');
                //$table->foreign('id_region')->references('id_region')->on('regions')->onDelete('restrict');
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
        Schema::dropIfExists('mon_alarms_Arch');
     
    }
}
