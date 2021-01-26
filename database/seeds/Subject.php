<?php

use Illuminate\Database\Seeder;

class Subject extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Subject::class,8)->create();
    
    }
}
