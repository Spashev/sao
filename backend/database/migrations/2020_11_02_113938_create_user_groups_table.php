<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_groups', function (Blueprint $table) {
            $table->id();
            $table->string('title', 500);
            $table->tinyInteger('level_id');
            $table->foreignId('parent_id')->nullable()->index()->constrained('user_groups');
            $table->timestamps();
        });

        Schema::table('users', function (Blueprint $table){
            $table->foreignId('group_id')->nullable()->index()->constrained('user_groups');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_groups');
    }
}
