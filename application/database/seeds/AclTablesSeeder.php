<?php

use Illuminate\Database\Seeder;

class AclTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $datetime = \Carbon\Carbon::now();

        /*  */
        $app_id = DB::table('applications')->insertGetId([
            'created_at' => $datetime,
            'name' => 'User Groups',
            'link' => 'user-groups',
            'in_user_menu' => true,
            'description' => 'Управление правами и группами доступа.',
        ]);

        /*  */
        $actions = [
            /* role */
            [
                'created_at' => $datetime,
                'app_id' => $app_id,
                'action' => 'role-create',
                'description' => 'Право создать новую роль.',
            ],
            [
                'created_at' => $datetime,
                'app_id' => $app_id,
                'action' => 'role-read',
                'description' => 'Право просматривать роль.',
            ],
            [
                'created_at' => $datetime,
                'app_id' => $app_id,
                'action' => 'role-update',
                'description' => 'Право изменить роль.',
            ],
            [
                'created_at' => $datetime,
                'app_id' => $app_id,
                'action' => 'role-delete',
                'description' => 'Право удалить роль.',
            ],
        ];

        foreach ($actions as $item) {
            $actions_id[] = DB::table('acl_actions')->insertGetId($item);
        }

        /*  */

        $admin_role_id = DB::table('acl_roles')->insertGetId([
            'created_at' => $datetime,
            'name' => 'Admin',
            'description' => 'Не ограниченный доступ.',
        ]);

        $base_role_id = DB::table('acl_roles')->insertGetId([
            'created_at' => $datetime,
            'name' => 'Base user',
            'description' => 'Базовый доступ.',
        ]);

        $test_role_id = DB::table('acl_roles')->insertGetId([
            'created_at' => $datetime,
            'name' => 'Test user',
            'parent_id' => $base_role_id,
            'description' => 'Тестовый доступ.',
        ]);

        /*  */

        foreach ($actions_id as $item) {
            DB::table('acl_rights')->insert([
                'created_at' => $datetime,
                'role_id' => $admin_role_id,
                'action_id' => $item,
            ]);
        }

        /*  */

        DB::table('acl_rights')->insert([
            'created_at' => $datetime,
            'role_id' => $base_role_id,
            'action_id' => 1,
            'sign' => 0,
        ]);

        DB::table('acl_rights')->insert([
            'created_at' => $datetime,
            'role_id' => $base_role_id,
            'action_id' => 2,
        ]);
    }
}
