<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class StudentsImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $students)
    {
        foreach ($students as $s) 
        {
            try {
            User::create([
                    'regdno' => $s[0],
                    'surname'=> $s[1],
                    'given_name' => $s[2],
                    'email' => $s[3],
                    'join_year' => $s[4],
                    'phone' => $s[5],
                    'is_lateral_entry' => $s[6],
                    'social_category' => $s[7],
                    'admission_category' => $s[8],
                    'residency' => $s[9],
                    'gender' => $s[10],
                    'specialization_id' => $s[11],
                    'regulation_id' => $s[12],
                    'created_at' => now(),
                    'updated_at' => now()
            ]);
        } 
                catch (Exception $e) {
                    echo $s[0] . "\n import failed";
                }
        }
    }

}
