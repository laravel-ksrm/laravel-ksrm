<?php

use Illuminate\Database\Seeder;

class SubjectOfferingType extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\SubjectOfferingType::class,8)->create();
    
    }
}
