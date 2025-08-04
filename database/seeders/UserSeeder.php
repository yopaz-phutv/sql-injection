<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->truncate();

        DB::table('users')->insert([
            ['username' => 'admin', 'password' => '88888888'],
            ['username' => 'admin2', 'password' => '99999999'],
        ]);
    }
}
