<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('accounts')->truncate();

        DB::table('accounts')->insert([
            ['code' => '97040012345678', 'name' => 'Nguyen Van A', 'balance' => 5000000],
            ['code' => '97040787654321', 'name' => 'Le Thi B',     'balance' => 3000000],
            ['code' => '97049911223344', 'name' => 'Pham Van C',   'balance' => 10000000],
        ]);
    }
}
