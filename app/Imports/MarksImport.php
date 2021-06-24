<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class MarksImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $marks)
    {
        // echo $marks->count();
        foreach ($marks as $m) 
        {
            try {
            ExamRegistrationMark::create([
                    
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
