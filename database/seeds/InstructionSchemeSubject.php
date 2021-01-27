<?php

use Illuminate\Database\Seeder;

class InstructionSchemeSubject extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\InstructionSchemeSubject::class,5)->create();
    
    }
}
