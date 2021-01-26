<?php

use Illuminate\Database\Seeder;

class SubjectCategory extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\SubjectCategory::class,8)->create();
    
    }
}
