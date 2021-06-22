<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExamRegistrationMark extends Model
{
    protected $guarded = [];
    public function students() {
        return $this->belongsTo(Student::class);
    }

    public function exam_schedules() {
        return $this->hasMany(ExamSchedule::class);
    }
    public function exam() {
        return $this->belongsTo(Exam::class);
    }

    public function subject() {
        return $this->belongsTo(Subject::class);
    }
    
}
