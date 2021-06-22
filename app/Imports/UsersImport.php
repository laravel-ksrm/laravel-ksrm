<?php
  
namespace App\Imports;
  
use App\Models\Student;
use Maatwebsite\Excel\Concerns\ToModel;
  
class UsersImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $s)
    {
        return new Student([
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
                    'regulation_id' => 1, //$s[12],
                    'created_at' => now(),
                    'updated_at' => now(),
        ]);
    }
}