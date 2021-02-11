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
            $table->string('im_ht_no');
            $table->string('im_semester');
            $table->string('im_reg_code')->nullable();
            $table->unsignedBigInteger('im_sub_code');
            $table->unsignedBigInteger('external_marks');
            $table->boolean('is_regular');
            $table->boolean('is_supply');
            $table->string('month_year');
            $table->timestamps();
            // $table->foreign('im_semester','f_results_im_semester')
            //     ->references('short_name')
            //     ->on('semesters')
            //     ->onDelete('cascade');
            // $table->foreign('im_reg_code','f_results_im_reg_code')
            //     ->references('short_name')
            //     ->on('regulations')
            //     ->onDelete('cascade');
            // $table->foreign('im_ht_no','f_results_im_ht_no')
            //     ->references('regdno')
            //     ->on('users')
            //     ->onDelete('cascade');
            // $table->foreign('im_sub_code','f_results_im_sub_code')
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
