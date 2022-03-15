<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'created_at' => \Carbon\Carbon::now(),
            'name' => 'Administrator',
            'password' => password_hash('admin', PASSWORD_DEFAULT),
            'email' => 'admin@kcell.kz',
            'role_id' => 1,
        ]);
    }
}
