<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Models\ExamRegistrationMark;
use App\Models\ExamSchedule;
use App\Models\StatsGpa;
use App\Models\StatsGrade;
use App\Models\Student;
use App\Models\Subject;
use Illuminate\Http\Request;

class ResultsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Exam::all();
    }
    public function getExamSchedules()
    {
        return ExamSchedule::all();
    }
    public function getExamRegistrationMark()
    {
        return ExamRegistrationMark::all();
    }
    public function getStatsGpa()
    {
        return StatsGpa::all();
    }
    public function CalcGpa($student_id)
    {
        $subject_id = ExamRegistrationMark::with('exam_schedules')->where('student_id',$student_id)->get();
        return $subject_id;
    }
    public function getStatsGrade()
    {
        return StatsGrade::all();
    }
    public function getStudent($student_id)
    {
        return ExamRegistrationMark::with(['student_id'])->where('student_id',$student_id)->get();
    }
    public function getSubjects()
    {
        return Subject::all();
    }
}
?>