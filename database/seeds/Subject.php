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

    $csv = dirname(__FILE__) . '/data/' . 'ssub.csv';
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
            $insert['short_name'] = $line[1];
            $insert['name'] = $line[2];
            $insert['department_id'] = $line[3];
            
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
