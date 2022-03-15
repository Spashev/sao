<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropColTroubleTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('trouble_tickets', function($table) {
            $table->dropForeign('trouble_tickets_network_type_foreign');
            $table->dropColumn('network_type');
        });
        /*

        $table->dropForeign('trouble_tickets_network_type_foreign');
        $table->dropColumn('network_type');

        $table->integer('pick_detail_id')->unsigned();
        $table->foreign('pick_detail_id')->references('id')->on('pick_details');

        */
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('trouble_tickets', function($table) {
            $table->unsignedBigInteger('network_type')->index()->after('status');
            $table->foreign('network_type')->references('id')->on('service_subnetworks')->onDelete('restrict');
         });
    }
}
