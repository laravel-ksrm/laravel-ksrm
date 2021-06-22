<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StatsGpa extends Model
{
    protected $guarded = [];
    public function exam() {
        return $this->belongsTo(Exam::class);
    }
    public function students() {
        return $this->belongsTo(Student::class);
    }
    
}
