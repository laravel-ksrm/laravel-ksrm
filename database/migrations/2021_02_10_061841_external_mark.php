<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ExternalMark extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('external_marks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('em_ht_no');
            $table->string('em_semester');
            $table->string('em_reg_code')->nullable();
            $table->unsignedBigInteger('em_sub_code');
            $table->string('external_marks');
            $table->enum('exam_type',['regular','supply']);
            $table->string('month_year');
            $table->timestamps();
            $table->foreign('em_semester','f_external_marks_em_semester')
                ->references('short_name')
                ->on('semesters')
                ->onDelete('cascade');
            $table->foreign('em_reg_code','f_external_marks_em_reg_code')
                ->references('short_name')
                ->on('regulations')
                ->onDelete('cascade');
            // $table->foreign('em_ht_no','f_external_marks_em_ht_no')
            //     ->references('regdno')
            //     ->on('users')
            //     ->onDelete('cascade');
            // $table->foreign('em_sub_code','f_external_marks_em_sub_code')
            //     ->references('code')
            //     ->on('subjects')
            //     ->onDelete('cascade');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
