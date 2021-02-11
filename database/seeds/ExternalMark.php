<?php

use Illuminate\Database\Seeder;

class ExternalMark extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * 
     */
    

    public function run()
    {
        
        DB::table('external_marks')->delete();
    $statement = "ALTER TABLE users AUTO_INCREMENT = 1;";
    DB::unprepared($statement);

    $csv = dirname(__FILE__) . '/data/' . 'em1.csv';
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

// Function to check string starting 
// with given substring 



            $insert = array();
            $insert['im_ht_no'] = $line[0];
            $insert['im_semester'] = 'I sem';
            $insert['im_reg_code'] = 'R-15';
            $insert['im_sub_code'] = $line[1];
            if($line[2]<0){
                $insert['external_marks'] = 1;
            }
            else{
                $insert['external_marks'] = $line[2];
            }
            $insert['month_year'] = 2017;
            if(str_starts_with($line[0],17)){
                $insert['is_regular'] = 1;
                $insert['is_supply'] = 0;
            }
            else{
                $insert['is_supply'] = 1;
                $insert['is_regular'] = 0;
            }
                        
            // insert
            DB::table('external_marks')->insert($insert);

            echo 'insert: ' . $line[0] ;
            echo PHP_EOL;

        }

    

    fclose($file_handle);

    echo PHP_EOL;
    echo '------------------------------------------ close file ------------------------------------------';
    echo PHP_EOL;

    
    }
}
