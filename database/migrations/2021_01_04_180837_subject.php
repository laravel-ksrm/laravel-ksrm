<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Subject extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('subjects', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->unsignedBigInteger('code')->nullable()->index();
        //     $table->string('sub_category');
        //     $table->string('short_name', Constants::TITLE_SHORT_LENGTH);
        //     $table->string('name', Constants::TITLE_LENGTH);
        //     $table->unsignedBigInteger('department_id');
        //     $table->string('program');
        //     $table->string('regulation');
        //     $table->string('semester');
        //     $table->boolean('is_theory')->default(true);
        //     $table->boolean('is_practical')->default(false);
        //     $table->unsignedBigInteger('lecture_hours');
        //     $table->unsignedBigInteger('tutorial_hours');
        //     $table->unsignedBigInteger('practical_hours');
        //     $table->unsignedBigInteger('internal_marks');
        //     $table->unsignedBigInteger('external_marks');
        //     $table->unsignedBigInteger('credits');

        //     $table->timestamps();
        //     $table->foreign('department_id', 'f_subjects_department_id')
        //         ->references('id')
        //         ->on('departments')
        //         ->onDelete('cascade');
        //     $table->foreign('semester', 'f_subjects_semester')
        //         ->references('short_name')
        //         ->on('semesters')
        //         ->onDelete('cascade');
        //     $table->foreign('regulation', 'f_subjects_regulation')
        //         ->references('short_name')
        //         ->on('regulations')
        //         ->onDelete('cascade');
        //     $table->foreign('sub_category', 'f_subjects_sub_category')
        //         ->references('short_name')
        //         ->on('subject_categories')
        //         ->onDelete('cascade');
        //     $table->foreign('program', 'f_subjects_program')
        //         ->references('short_name')
        //         ->on('programs')
        //         ->onDelete('cascade');
        
            
        // });
        Schema::create('subjects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code', Constants::TITLE_SHORT_LENGTH);
            $table->string('short_name', Constants::TITLE_SHORT_LENGTH)->unique();
            $table->string('name', Constants::TITLE_LENGTH);
            $table->unsignedBigInteger('department_id');
            $table->boolean('is_theory')->default(true);
            $table->boolean('is_lab')->default(false);
            $table->boolean('is_project')->default(false);
            $table->timestamps();
            $table->foreign('department_id', 'f_subjects_department_id')
                ->references('id')
                ->on('departments')
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
        Schema::table('subjects', function (Blueprint $table) {
            $table->dropForeign('f_subjects_department_id');
        });
        Schema::dropIfExists('subjects');

    }
}
