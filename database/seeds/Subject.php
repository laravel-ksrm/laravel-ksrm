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
        DB::table('subjects')->delete();
    $statement = "ALTER TABLE users AUTO_INCREMENT = 1;";
    DB::unprepared($statement);

    $csv = dirname(__FILE__) . '/data/' . 'R15CSE14.csv';
    $file_handle = fopen($csv, "r");

    echo PHP_EOL;
    echo '------------------------------------------ open file ------------------------------------------';
    echo PHP_EOL;

    while (!feof($file_handle)) {

        $line = fgetcsv($file_handle);
        if (empty($line)) {
            continue; // skip blank lines
        }

    //    Pro-id,sn,name,sy,ey,ts,tc,pcgpa
    
            
            
            $insert = array();
            $insert['code'] = $line[0];
            $insert['sub_category'] = $line[1];
            $insert['short_name'] = $line[2];
            $insert['name'] = $line[3];
            $insert['department_id'] = $line[4];
            $insert['regulation'] = $line[5];
            $insert['semester'] = $line[6];
            $insert['is_theory'] = $line[7];
            $insert['is_practical'] = $line[8];
            $insert['lecture_hours'] = $line[9];
            $insert['tutorial_hours'] = $line[10];
            $insert['practical_hours'] = $line[11];
            $insert['internal_marks'] = $line[12];
            $insert['external_marks'] = $line[13];
            $insert['credits'] = $line[14];
            
// insert
            DB::table('subjects')->insert($insert);

            echo 'insert: ' . $line[2] ;
            echo PHP_EOL;

        }

    

    fclose($file_handle);

    echo PHP_EOL;
    echo '------------------------------------------ close file ------------------------------------------';
    echo PHP_EOL;

    
    }
    
}
