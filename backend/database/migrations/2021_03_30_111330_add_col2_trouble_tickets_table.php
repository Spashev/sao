<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCol2TroubleTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::table('trouble_tickets', function($table) {
            $table->unsignedBigInteger('network_type')->index()->after('status');
            $table->foreign('network_type')->references('id')->on('service_subnetworks')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::table('trouble_tickets', function($table) {
            $table->dropColumn('network_type');
        });
    }
}
