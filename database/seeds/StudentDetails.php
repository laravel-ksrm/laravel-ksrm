<?php

use Illuminate\Database\Seeder;

class StudentDetails extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('StudentDetailss')->delete();
    $statement = "ALTER TABLE StudentDetailss AUTO_INCREMENT = 1;";
    DB::unprepared($statement);

    $csv = dirname(__FILE__) . '/data/' . 'students.csv';
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
0-regdno,
1-surname
2-given_name
3-email,
4-join_year,
5-phone,
6-is_lateral_entry,
7-social_category,
8-admission_category,
9-residency,
10-gender,
11-specialization_id,
12-regulation_id

*/

            $insert = array();
            $insert['regdno'] = $line[0];
            $insert['first_name'] = $line[1];
            $insert['last_name'] = $line[2];
            $insert['email'] = $line[3];
            $insert['join_year'] = $line[4];
            $insert['phone'] = $line[5];
            $insert['is_lateral_entry'] = $line[6];
            $insert['social_category'] = $line[7];
            $insert['admission_category'] = $line[8];
            $insert['residency'] = $line[9];
            $insert['gender'] = $line[10];
            $insert['specialization_id'] = $line[11];
            $insert['regulation_id'] = $line[12];
            $insert['password'] = $line[13];

        if (empty($line[5])) {
        
        $insert['phone']=NULL;
            // skip blank lines
        }
// insert
            DB::table('StudentDetailss')->insert($insert);

            echo 'insert: ' . $line[1] ;
            echo PHP_EOL;

        }

    

    fclose($file_handle);

    echo PHP_EOL;
    echo '------------------------------------------ close file ------------------------------------------';
    echo PHP_EOL;

    
    }
}