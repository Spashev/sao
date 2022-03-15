<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->softDeletes();
            $table->unsignedBigInteger('id_who_changed')->nullable();
            $table->unsignedBigInteger('uid')->nullable();
            $table->string('position')->nullable();
            $table->string('department')->nullable();
            $table->string('group')->nullable();
            $table->string('phone')->nullable();
            $table->string('mobile')->nullable();
            $table->string('manager')->nullable();
            $table->string('photo')->nullable();
            $table->boolean('is_kcell')->default('1');
            $table->boolean('is_active')->default('0');

            $table->index('name');
            $table->index('email');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex(['name']);
            $table->dropIndex(['email']);

            $table->dropColumn('id_who_changed');
            $table->dropColumn('uid');
            $table->dropColumn('position');
            $table->dropColumn('department');
            $table->dropColumn('group');
            $table->dropColumn('phone');
            $table->dropColumn('mobile');
            $table->dropColumn('manager');
            $table->dropColumn('photo');
            $table->dropColumn('is_kcell');
            $table->dropColumn('is_active');
        });
    }
}
