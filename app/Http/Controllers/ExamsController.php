<?php

namespace App\Http\Controllers;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\Exam;
use Illuminate\Http\Request;

use App\Exports\ExamsExport;  
use App\Imports\ExamsImport;  

class ExamsController extends Controller
{
    public function index()
    {
        return view('import');
    }
public function import(Request $request) 
{
    $valid_extension = array("csv");
    $file = $request->file('file');
    $filename = $file->getClientOriginalName();
    $extension = $file->getClientOriginalExtension();
    $location = 'exams';
    $file->move($location,$filename);
    $filepath = public_path($location."/".$filename);
    Excel::import(new ExamsImport, $filepath);
    return back();
    }
    public function export()
    {
        return Excel::download(new ExamsExport, 'exams-collection.xlsx');
    }
public function import_exams(Request $request) {
    // Excel::import(new MarksImport, 'marks.csv');
    $exams_collection = Excel::toCollection(null, request()->file('marks_file'));
    $exams_collection = $exmas_collection[0]->slice(1);
    $math_marks = $exams_collection->filter(function($value, $key) {
        return $value[1] == 1821101;
    });
    return $math_marks->pluck(2)->zip($math_marks->pluck(3));
}
}
?>