<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'TestUser',
        //     'email' => 'test@example.com',
        // ]);
        DB::table('users')->insert([[
            'name'=>'mohammde',
        'email'=>'admin@gmail.com',
        'password'=>'12345',
        ]]);
    }
}
