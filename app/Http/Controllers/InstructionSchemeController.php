<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Semester;
use App\Models\InstructionScheme;

class InstructionSchemeController extends Controller
{
    public function index()
    {
        return InstructionScheme::with(['semester','specialization'])->get();
    }

    public function getCreditCount($specialization_id,$semester_id)
    {
        
        return InstructionScheme::with(['semester','semester.regulation','specialization'])->where('specialization_id',$specialization_id)->where('semester_id',$semester_id)->get();
    } 
}


?>