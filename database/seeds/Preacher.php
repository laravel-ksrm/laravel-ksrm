<?php

use Illuminate\Database\Seeder;

class Preacher extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('preachers')->delete();
    $statement = "ALTER TABLE users AUTO_INCREMENT = 1;";
    DB::unprepared($statement);

    $csv = dirname(__FILE__) . '/data/' . 'Faculty.csv';
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
            $insert['email'] = $line[0];
            $insert['name'] = $line[1];
            $insert['department_name'] = $line[2];
// insert
            DB::table('preachers')->insert($insert);

            echo 'insert: ' . $line[1] ;
            echo PHP_EOL;

        }

    

    fclose($file_handle);

    echo PHP_EOL;
    echo '------------------------------------------ close file ------------------------------------------';
    echo PHP_EOL;

    
    }
}
