<?php

use Illuminate\Database\Seeder;

class Regulation extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('regulations')->delete();
    $statement = "ALTER TABLE users AUTO_INCREMENT = 1;";
    DB::unprepared($statement);

    $csv = dirname(__FILE__) . '/data/' . 'regulations.csv';
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
            $insert['program_id'] = $line[0];
            $insert['short_name'] = $line[1];
            $insert['name'] = $line[2];
            $insert['start_year'] = $line[3];
            $insert['end_year'] = $line[4];
            $insert['total_semesters'] = $line[5];
            $insert['total_credits'] = $line[6];
            $insert['pass_cgpa'] = $line[7];
            
// insert
            DB::table('regulations')->insert($insert);

            echo 'insert: ' . $line[1] ;
            echo PHP_EOL;

        }

    

    fclose($file_handle);

    echo PHP_EOL;
    echo '------------------------------------------ close file ------------------------------------------';
    echo PHP_EOL;

    
    }
}