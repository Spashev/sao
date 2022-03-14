<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTroubleTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trouble_tickets', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_act')->index();
            $table->unsignedBigInteger('id_region')->index();
            $table->unsignedBigInteger('priority')->nullable();
            $table->unsignedBigInteger('tt_type')->nullable(); // trouble tickets type (1-event, 2-incident, 3-problem)
            $table->unsignedBigInteger('status')->nullable(); // --
            $table->unsignedBigInteger('network_type')->index();
            $table->string('source_name', 1000);
            $table->unsignedBigInteger('interruption')->nullable(); // 1 - all subs; 2 - kcell; 3 - activ
            $table->unsignedBigInteger('affection')->nullable(); // 1 - no; 2 - yes; 3 - degradation
            $table->unsignedBigInteger('influence')->nullable(); // percent of influence on service
            $table->unsignedBigInteger('inform_type')->nullable(); // 1 - email; 2 - email/sms; 3 - no;
            $table->unsignedBigInteger('probable_cause')->index(); // 
            $table->unsignedBigInteger('root_cause')->index(); // 
            $table->dateTime('start_date', 0);
            $table->dateTime('finish_date', 0);
            $table->string('description', 4000);
            $table->string('last_comment', 2000);
            $table->timestamps();

            $table->foreign('id_act')->references('id')->on('scheme_actions')->onDelete('restrict');
            $table->foreign('id_region')->references('id')->on('regions')->onDelete('restrict');
            $table->foreign('network_type')->references('id')->on('subnetworks')->onDelete('restrict');
            $table->foreign('probable_cause')->references('id')->on('service_problem_causes')->onDelete('restrict');
            $table->foreign('root_cause')->references('id')->on('service_problem_causes')->onDelete('restrict');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trouble_tickets');
    }
}

