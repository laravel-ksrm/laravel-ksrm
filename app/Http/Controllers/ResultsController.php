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
    public function getStatsGrade()
    {
        return StatsGrade::all();
    }
    public function getStudents()
    {
        return Student::all();
    }
    public function getSubjects()
    {
        return Subject::all();
    }
}
?>