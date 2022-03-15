<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsTroubleTicketSettlementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('trouble_tickets', function (Blueprint $table) {
            $table->unsignedBigInteger('id_source_settlement')->after('inform_type')->nullable()->index();
            $table->unsignedBigInteger('down_site_5g')->after('inform_type')->default(0);
            $table->unsignedBigInteger('down_site_4g')->after('inform_type')->default(0);
            $table->unsignedBigInteger('down_site_3g')->after('inform_type')->default(0);
            $table->unsignedBigInteger('down_site_2g')->after('inform_type')->default(0);

            $table->foreign('id_source_settlement')->references('id')->on('settlements')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('trouble_tickets', function (Blueprint $table) {
            $table->dropColumn('id_source_settlement');
        });
    }
}
