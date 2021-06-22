<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public function semester() {
        return $this->belongsTo(Semester::class);
    }

    public function specialization() {
        return $this->belongsTo(Specialization::class);
    }

}