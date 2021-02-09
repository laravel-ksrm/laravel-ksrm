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
        DB::table('subject_offering_types')->delete();
    $statement = "ALTER TABLE users AUTO_INCREMENT = 1;";
    DB::unprepared($statement);

    $csv = dirname(__FILE__) . '/data/' . 'sot.csv';
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
            $insert['description'] = $line[0];
            
            // insert
            DB::table('subject_offering_types')->insert($insert);

            echo 'insert: ' . $line[0] ;
            echo PHP_EOL;

        }

    

    fclose($file_handle);

    echo PHP_EOL;
    echo '------------------------------------------ close file ------------------------------------------';
    echo PHP_EOL;

    
    }
}
