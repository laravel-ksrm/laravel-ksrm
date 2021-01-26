<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InstructionScheme extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instruction_schemes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('specialization_id');
            $table->unsignedBigInteger('semester_id');
            $table->unsignedBigInteger('subject_category_id');
            $table->unsignedBigInteger('subject_offering_type_id');
            // $table->longText('subjects');
            $table->longText('scheme');
            $table->unsignedBigInteger('sequence_number');
            $table->timestamps();
            $table->foreign('subject_offering_type_id', 'f_instruction_schemes_subject_offering_type_id')
                ->references('id')
                ->on('subject_offering_types')
                ->onDelete('cascade');
            $table->foreign('subject_category_id', 'f_instruction_schemes_subject_category_id')
                ->references('id')
                ->on('subject_categories')
                ->onDelete('cascade');
            $table->foreign('semester_id', 'f_instruction_schemes_semester_id')
                ->references('id')
                ->on('semesters')
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
        Schema::table('instruction_schemes', function (Blueprint $table) {
            $table->dropForeign('f_instruction_schemes_subject_offering_type_id');
            $table->dropForeign('f_instruction_schemes_subject_category_id');
            $table->dropForeign('f_instruction_schemes_semester_id');
        });
        Schema::dropIfExists('instruction_schemes');

    }
}
