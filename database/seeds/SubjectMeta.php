<?php

use Illuminate\Database\Seeder;

class SubjectMeta extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\SubjectMeta::class,8)->create();
    
    }
}
