<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Syllabi extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('syllabis', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->longText('excerpt')->nullable();
            $table->longText('objectives');
            $table->longText('cos');
            $table->string('file_path');
            $table->longText('textbooks');
            $table->longText('reference_books');
            $table->unsignedBigInteger('subject_id');
            $table->timestamps();
            $table->foreign('subject_id', 'f_syllabus_subject_id')
                ->references('id')
                ->on('subjects')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('syllabis', function(Blueprint $table) {
            $table->dropForeign('f_syllabus_subject_id');
        }); 
        Schema::dropIfExists('syllabus');
    }
}
