<?php

use Illuminate\Database\Seeder;

class InstructionScheme extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\InstructionScheme::class,8)->create();
    
    }
}
