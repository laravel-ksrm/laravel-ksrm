<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
class Exam extends Model
{
    protected $guarded = [];

    protected $fillable = [
        "short_name",
        "name",
        "academic_year",
        "start_date",
        "end_date",
        "exam_category",
        "semester_id"
    ];
    
    

    public function semester() {
        return $this->belongsTo(Semester::class);
    }

    public function exam_schedules() {
        return $this->hasMany(ExamSchedule::class);
    }
}
