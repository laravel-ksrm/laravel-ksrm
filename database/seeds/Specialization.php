<?php

use Illuminate\Database\Seeder;

class Specialization extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Specialization::class,5)->create();
    
    }
}
