<?php

use Illuminate\Database\Seeder;

class Semester extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('semesters')->delete();
        $statement = "ALTER TABLE users AUTO_INCREMENT = 1;";
        DB::unprepared($statement);
    
        $csv = dirname(__FILE__) . '/data/' . 'semesters.csv';
        $file_handle = fopen($csv, "r");
    
        echo PHP_EOL;
        echo '------------------------------------------ open file ------------------------------------------';
        echo PHP_EOL;
    
        while (!feof($file_handle)) {
    
            $line = fgetcsv($file_handle);
            if (empty($line)) {
                continue; // skip blank lines
            }
    
    /*
    CSV column names
    1-name
    2-email
    3-department_name,
    
    
    */
    
                $insert = array();
                $insert['regulation_id'] = $line[0];
                $insert['short_name'] = $line[1];
                $insert['name'] = $line[2];
                $insert['semester_number'] = $line[3];
    // insert
                DB::table('semesters')->insert($insert);
    
                echo 'insert: ' . $line[1] ;
                echo PHP_EOL;
    
            }
    
        
    
        fclose($file_handle);
    
        echo PHP_EOL;
        echo '------------------------------------------ close file ------------------------------------------';
        echo PHP_EOL;
    
        
        }   
}