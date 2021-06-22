<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StatsGrade extends Model
{
    protected $guarded = [];
    public function exam() {
        return $this->belongsTo(Exam::class);
    }

    public function subject() {
        return $this->belongsTo(Subject::class);
    }
    public function students() {
        return $this->belongsTo(Student::class);
    }
}
