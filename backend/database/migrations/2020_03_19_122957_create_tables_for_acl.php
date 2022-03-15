<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTablesForAcl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /* 1 */
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->unsignedBigInteger('id_who_changed')->nullable();
            $table->string('name');
            $table->string('link');
            $table->boolean('in_user_menu')->default(false);
            $table->string('description')->nullable();
        });

        /* 2 */
        Schema::create('acl_actions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->unsignedBigInteger('id_who_changed')->nullable();
            $table->unsignedBigInteger('app_id');
            $table->string('action')->unique();
            $table->string('description')->nullable();

            $table->index('app_id');
            $table->foreign('app_id')->references('id')->on('applications')->onDelete('cascade');
        });

        /* 3 */
        Schema::create('acl_roles', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->unsignedBigInteger('id_who_changed')->nullable();
            $table->unsignedBigInteger('parent_id')->default(0);
            $table->string('name');
            $table->string('description')->nullable();

            $table->index('parent_id');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger('role_id')->nullable();
            $table->foreign('role_id')->references('id')->on('acl_roles')->onDelete('cascade');
        });

        /* 4 */
        Schema::create('acl_rights', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->unsignedBigInteger('role_id');
            $table->unsignedBigInteger('action_id');
            $table->boolean('sign')->default(true);

            $table->index(['role_id', 'action_id']);
            $table->foreign('role_id')->references('id')->on('acl_roles')->onDelete('cascade');
            $table->foreign('action_id')->references('id')->on('acl_actions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        /* 4 */
        Schema::dropIfExists('acl_roles');

        /* 3 */
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex(['role_id']);
            $table->dropColumn('role_id');
        });

        Schema::dropIfExists('acl_roles');

        /* 2 */
        Schema::dropIfExists('acl_actions');

        /* 1 */
        Schema::dropIfExists('applications');
    }
}
