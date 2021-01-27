<?php

use Illuminate\Database\Seeder;

class Syllabi extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Syllabi::class,5)->create();
    
    }
}
