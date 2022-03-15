<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SchemeTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('scheme_components')) {
            Schema::create('scheme_components', function ($table) {
                $table->bigIncrements('id');// id_comp
                $table->string('comp_name', 256);
                $table->string('comp_desc', 4000)->nullable();
                $table->string('change_logs', 4000)->nullable();
                $table->boolean('is_active')->nullable()->default(false);
                $table->tinyInteger('template_id')->nullable();// id_template
                $table->unsignedBigInteger('created_by')->nullable();// #added
                $table->timestampsTz();// date_created, date_updated
                $table->softDeletesTz();// #added
            });
        }

        if (!Schema::hasTable('scheme_statuses')) {
            Schema::create('scheme_statuses', function ($table) {
                $table->bigIncrements('id'); // id_status
                $table->string('name', 256)->nullable(); // status_name
                $table->unsignedBigInteger('comp_id')->nullable()->index();//id_comp
                $table->unsignedBigInteger('created_by')->nullable(); // #added
                $table->timestampsTz();// #added
                $table->softDeletesTz();// #added

                $table->foreign('comp_id')
                    ->references('id')
                    ->on('scheme_components')
                    ->onDelete('restrict');
            });
        }

        if (!Schema::hasTable('scheme_actions')) {
            Schema::create('scheme_actions', function ($table) {
                $table->bigIncrements('id');// id_act
                $table->unsignedBigInteger('comp_id')->index();// id_comp
                $table->unsignedBigInteger('par_act_id')->nullable()->index();// id_act_par
                $table->unsignedBigInteger('back_act_id')->nullable()->index();//id_act_bck
                $table->unsignedBigInteger('status_id')->index();//id_status
                $table->string('act_title', 256);
                $table->string('act_desc', 4000)->nullable();
                $table->boolean('enabled')->default(true);
                $table->unsignedBigInteger('created_by')->nullable();// #added
                $table->timestampsTz();// create_date, update_date
                $table->softDeletesTz();// #added

                $table->foreign('comp_id')->references('id')->on('scheme_components')->onDelete('restrict');
                $table->foreign('par_act_id')->references('id')->on('scheme_actions')->onDelete('restrict');
                $table->foreign('back_act_id')->references('id')->on('scheme_actions')->onDelete('restrict');
                $table->foreign('status_id')->references('id')->on('scheme_statuses')->onDelete('restrict');
            });

        }

        if (!Schema::hasTable('scheme_user_cats')) {
            Schema::create('scheme_user_cats', function ($table) {
                $table->bigIncrements('id');//id_cat
                $table->unsignedBigInteger('comp_id')->index();//id_comp
                $table->string('cat_name', 256);
                $table->unsignedBigInteger('created_by')->nullable();// #added
                $table->timestampsTz();// #added
                $table->softDeletesTz();// #added

                $table->foreign('comp_id')
                    ->references('id')
                    ->on('scheme_components')
                    ->onDelete('restrict');
            });
        }

        if (!Schema::hasTable('scheme_user_fields')) {
            Schema::create('scheme_user_fields', function ($table) {
                $table->bigIncrements('id');// id_field
                $table->unsignedBigInteger('comp_id')->index();//id_comp
                $table->unsignedBigInteger('cat_id')->index();//id_cat
                $table->string('field_name', 256);
                $table->unsignedBigInteger('created_by')->nullable();// #added
                $table->timestampsTz();// #added
                $table->softDeletesTz();// #added

                $table->foreign('comp_id')
                    ->references('id')
                    ->on('scheme_components')
                    ->onDelete('restrict');

                $table->foreign('cat_id')
                    ->references('id')
                    ->on('scheme_user_cats')
                    ->onDelete('restrict');

            });
        }

        if (!Schema::hasTable('scheme_user_groups')) {
            Schema::create('scheme_user_groups', function ($table) {
                $table->bigIncrements('id');// id_group
                $table->unsignedBigInteger('comp_id')->index();// id_comp
                $table->string('group_name', 256);
                $table->tinyInteger('channel')->default(0)->nullable();
                $table->boolean('enabled')->default(true)->nullable();
                $table->unsignedBigInteger('created_by')->nullable();// #added
                $table->timestampsTz();// #added
                $table->softDeletesTz();// #added

                $table->foreign('comp_id')
                    ->references('id')
                    ->on('scheme_components')
                    ->onDelete('restrict');
            });
        }

        if (!Schema::hasTable('scheme_user_lists')) {
            Schema::create('scheme_user_lists', function ($table) {
                $table->unsignedBigInteger('user_id')->index();// id_user
                $table->unsignedBigInteger('group_id')->index();// id_group
                $table->unsignedBigInteger('field_id')->nullable()->index();// id_field TODO при переносе данных нужно 0(ноль) перевести на NULL
                $table->boolean('is_email')->default(false);
                $table->boolean('is_admin')->default(false);
                $table->unsignedBigInteger('created_by')->nullable();// #added
                $table->timestampsTz();// #added
                $table->softDeletesTz();// #added

                $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('restrict');

                $table->foreign('group_id')
                    ->references('id')
                    ->on('scheme_user_groups')
                    ->onDelete('restrict');

                $table->foreign('field_id')
                    ->references('id')
                    ->on('scheme_user_fields')
                    ->onDelete('restrict');
            });
        }

        if (!Schema::hasTable('scheme_user_activities')) {
            Schema::create('scheme_user_activities', function ($table) {
                $table->bigIncrements('id');// id_atv
                $table->unsignedBigInteger('act_id')->index();// id_act
                $table->unsignedBigInteger('group_id')->index();// id_group
                $table->unsignedBigInteger('cat_id')->index();// id_cat
                $table->tinyInteger('act_type');// type_act
                $table->boolean('is_user')->default(false)->nullable();
                $table->tinyInteger('inform_by')->nullable();
                $table->unsignedBigInteger('created_by')->nullable();// #added
                $table->timestampsTz();// #added
                $table->softDeletesTz();// #added

                $table->foreign('act_id')
                    ->references('id')
                    ->on('scheme_actions')
                    ->onDelete('restrict');

                $table->foreign('group_id')
                    ->references('id')
                    ->on('scheme_user_groups')
                    ->onDelete('restrict');

                $table->foreign('cat_id')
                    ->references('id')
                    ->on('scheme_user_cats')
                    ->onDelete('restrict');

            });
        }

        if (!Schema::hasTable('scheme_email_activities')) {
            Schema::create('scheme_email_activities', function ($table) {
                $table->bigIncrements('id');// id_atv
                $table->unsignedBigInteger('act_id')->index();// id_act
                $table->string('email', 255);
                $table->unsignedBigInteger('created_by')->nullable();// #added
                $table->timestampsTz();// #added
                $table->softDeletesTz();// #added

                $table->foreign('act_id')->references('id')->on('scheme_actions');
            });
        }

        if (!Schema::hasTable('scheme_fields')) {
            Schema::create('scheme_fields', function ($table) {
                $table->bigIncrements('id');// id_field
                $table->unsignedBigInteger('comp_id')->index();// id_comp
                $table->string('field_name', 256)->comment('SYSNAME');
                $table->string('field_label', 256)->nullable();
                $table->tinyInteger('field_ord')->default(99);
                $table->tinyInteger('field_type')->nullable()->comment('1 - select(single); 2-select(multi); 3-input;');
                $table->tinyInteger('query_type')->nullable()->comment('1-query; 2-values');
                $table->string('query_select', 4000)->nullable()->comment('query');
                $table->string('query_db', 256)->nullable()->comment('db');
                $table->string('query_value2', 4000)->nullable()->comment('value on query_type is values');
                $table->string('cond_show', 1000)->nullable();
                $table->string('cond_alert', 4000)->nullable();
                $table->string('default_vals', 1000)->nullable();
                $table->boolean('is_req')->default(false)->nullable()->comment('1-yes;0-no');
                $table->integer('parent')->default(0)->nullable();
                $table->tinyInteger('dependent')->default(0)->nullable();
                $table->string('style_type', 200)->nullable();
                $table->integer('field_col')->nullable();
                $table->string('style_class', 200)->nullable();
                $table->boolean('is_readonly')->nullable()->default(false);
                $table->string('change_func', 256)->nullable();
                $table->smallInteger('max_length')->nullable();
                $table->smallInteger('min_length')->nullable();
                $table->text('query_value')->nullable();
                $table->unsignedBigInteger('created_by')->nullable();// #added
                $table->timestampsTz();// #added
                $table->softDeletesTz();// #added

                $table->foreign('comp_id')->references('id')->on('scheme_components');
            });
        }

        if (!Schema::hasTable('scheme_field_values')) {
            Schema::create('scheme_field_values', function ($table) {
                $table->bigIncrements('id');// id_field_value
                $table->unsignedBigInteger('field_id')->nullable()->index();// id_field
                $table->string('field_value', 2000)->nullable();
                $table->unsignedBigInteger('created_by')->nullable();
                $table->timestampsTz();// created_at > date_created #added updated_at
                $table->softDeletesTz();// #added

                $table->foreign('field_id')->references('id')->on('scheme_fields')->onDelete('restrict');
            });
        }

        if (!Schema::hasTable('scheme_field_lists')) {
            Schema::create('scheme_field_lists', function ($table) {
                $table->bigIncrements('id');// id_fieldlist
                $table->unsignedBigInteger('act_id')->index();//id_act
                $table->unsignedBigInteger('field_id')->index();// id_field
                $table->unsignedBigInteger('user_cat_id')->comment('0-for all;');//id_usercat
                $table->unsignedBigInteger('user_field_id')->comment('0-for all;');//id_userfield
                $table->boolean('is_basic')->nullable()->comment('1-yes; 0-no');
                $table->tinyInteger('field_type')->nullable();
                $table->tinyInteger('field_ord')->nullable()->default(99);
                $table->tinyInteger('query_type')->nullable();
                $table->string('query_select', 4000)->nullable();
                $table->string('query_db', 256)->nullable();
                $table->string('query_value', 4000)->nullable();
                $table->string('cond_show', 1000)->nullable();
                $table->string('cond_alert', 1000)->nullable();
                $table->string('default_vals', 1000)->nullable();
                $table->boolean('is_req')->default(false)->nullable();
                $table->unsignedBigInteger('created_by')->nullable();// #added
                $table->timestampsTz();// #added
                $table->softDeletesTz();// #added

                $table->foreign('act_id')->references('id')->on('scheme_actions');
                $table->foreign('field_id')->references('id')->on('scheme_fields')->onDelete('restrict');
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
        Schema::drop('scheme_field_lists');
        Schema::drop('scheme_field_values');
        Schema::drop('scheme_fields');
        Schema::drop('scheme_email_activities');
        Schema::drop('scheme_user_activities');
        Schema::drop('scheme_user_lists');
        Schema::drop('scheme_user_groups');
        Schema::drop('scheme_user_fields');
        Schema::drop('scheme_user_cats');
        Schema::drop('scheme_actions');
        Schema::drop('scheme_statuses');
        Schema::drop('scheme_components');
    }
}
