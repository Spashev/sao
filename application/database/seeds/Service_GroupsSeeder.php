<?php

use Illuminate\Database\Seeder;

class Service_GroupsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $datetime = \Carbon\Carbon::now();
        DB::table('service_groups')->insert([
            'group_name' => Str::random(10),
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now(),
        ]);
    }
}
