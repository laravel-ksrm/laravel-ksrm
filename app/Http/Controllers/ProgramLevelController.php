<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProgramLevel;

class ProgramLevelController extends Controller
{
    public function index()
    {
        $levels = ProgramLevel::get();
        return $levels;
    }
}
?>