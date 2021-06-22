<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Comment;

class CommentsController extends Controller
{
    public function index()
    {
        return Comment::with(['semester','specialization'])->get();
    }
    public function addComments(Request $request) {
        $validatedAttributes = $request->validate([
            'email' => 'required|email|regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/',
            'comments' => 'nullable',
            'specialization_code' => 'required',
            'semester_id' => 'required'
        ]);
        $comment = [
            'email' => $request->email,
            'comment' => $request->comments,
            'specialization_id' =>$request->specialization_id,
            'semester_id' => $request->semester_id,
            'created_at' => now(),
            'updated_at' => now()
        ];

        $rid = DB::table('comments')->insertGetId($comment);
        // $rating['id'] = $rid;
        return response(json_decode($rid->email), 200);
    }
}