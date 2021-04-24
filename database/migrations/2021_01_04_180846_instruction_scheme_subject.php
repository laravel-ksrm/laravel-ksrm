<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InstructionSchemeSubject extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instruction_scheme_subject', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('instruction_scheme_id');
            $table->unsignedBigInteger('subject_id');
            $table->timestamps();
            $table->unique(['instruction_scheme_id', 'subject_id'], 'u_instruction_scheme_id_subject_id');
            $table->foreign('instruction_scheme_id', 'f_instruction_scheme_subject_instruction_scheme_id')
                ->references('id')
                ->on('instruction_schemes')
                ->onDelete('cascade');
            $table->foreign('subject_id', 'f_instruction_schemes_subjects_subject_id')
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
        Schema::table('instruction_scheme_subject', function (Blueprint $table) {
            $table->dropForeign('f_instruction_scheme_subject_instruction_scheme_id');
            $table->dropForeign('f_instruction_scheme_subject_subject_id');
        });
    }
}
