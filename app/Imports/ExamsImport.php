<?php

namespace App\Imports;
use App\Models\Exam;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ExamsImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $exams)
    {
        // echo $marks->count();
        $status = array();
        foreach($exams as $row){
            $exam_short_name = Exam::where('short_name','=',$row['short_name'])->first();
            if(!is_null($exam_short_name)){
                $status['status'] = "Failed";
                $status['message'] = 'Exam with'.$row['short_name'].' already Exists';
            }
            else{
                Exam::create([
                    'short_name' => $row['short_name'],
                    'name' => $row['name'],
                    'academic_year' =>$row['academic_year'],
                    'start_date' =>$row['start_date'],
                    'end_date' => $row['end_date'],
                    'exam_category' => $row['exam_category'],
                    'semester_id' =>$row['semester_id'],
                ]);
                $status['status']= 'success';
                $status['message']='Exams imported successfully.';
            }
            
        }
        
    }

}