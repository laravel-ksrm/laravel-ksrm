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

$year = 2018;

            $insert = array();
            if(str_starts_with($year,2,4)){
                $insert['em_ht_no'] = $line[0];
            }
            else{
                break;
            }
            $insert['em_semester'] = 'I sem';
            $insert['em_reg_code'] = 'R-15';
            $insert['em_sub_code'] = $line[1];
            if($line[2] == -1){
                $insert['external_marks'] = 'Abs';
            }
            elseif($line[2] == -2){
                $insert['external_marks'] = 'Mal Practice';
            }
            elseif($line[2] == -5){
                $insert['external_marks'] = 'No End Exam';
            }
            else{
                $insert['external_marks'] = $line[2];
            }
            $insert['month_year'] = $year;
            if(str_starts_with($line[0],substr($year,2,4))){
                $insert['exam_type'] = 'regular';
            }
            else{
                $insert['exam_type'] = 'supply';
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
