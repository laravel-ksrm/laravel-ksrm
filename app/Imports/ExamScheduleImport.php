<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ExamScheduleImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $marks)
    {
        // echo $marks->count();
        foreach ($schedule as $s) 
        {
            try {
            ExamSchedule::create([
                    
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
