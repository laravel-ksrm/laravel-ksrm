<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InternalMark extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('internal_marks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('semester');
            $table->string('reg_code')->nullable();
            $table->unsignedBigInteger('internal_marks');
            $table->boolean('is_regular');
            $table->boolean('is_supply');
            $table->string('month_year');
            $table->string('short_name', Constants::TITLE_SHORT_LENGTH)->unique();
            $table->string('name', Constants::TITLE_LENGTH);
            $table->timestamps();
            $table->foreign('semester','f_results_semester')
                ->references('short_name')
                ->on('semesters')
                ->onDelete('cascade');
            $table->foreign('reg_code','f_results_reg_code')
                ->references('short_name')
                ->on('regulations')
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
        Schema::table('results', function (Blueprint $table) {
            $table->dropForeign('f_results_semester');
        });
        Schema::table('results', function (Blueprint $table) {
            $table->dropForeign('f_results_reg_code');
        });
        Schema::dropIfExists('results');
    }
}
