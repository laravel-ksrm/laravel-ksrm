<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class StudentDetails extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_datails', function (Blueprint $table) {
        $table->id();
        $table->string('regdno')->index();
        $table->BigInteger('join_year');
        $table->unsignedBigInteger('phone')->nullable();
        $table->string('is_lateral_entry');
        $table->string('social_category');
        $table->string('admission_category');
        $table->string('residency');
        $table->string('gender');
        $table->unsignedBigInteger('specialization_id');
        $table->string('regulation_id');
        $table->timestamps();
        // $table->foreign('regdno')
        //     ->references('regdno')
        //     ->on('users')
        //     ->onDelete('cascade')
        //     ->onUpdate('cascade');
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
