<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropColServiceProblemCausesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('service_problem_causes', function($table) {
            $table->dropColumn('id_problem_group');
         });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('service_problem_causes', function($table) {
            $table->unsignedBigInteger('id_problem_group')->nullable()->index()->after('id');
         });
    }
}
