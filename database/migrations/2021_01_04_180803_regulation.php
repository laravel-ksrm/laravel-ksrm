<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Regulation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('regulations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('program_id')->index();
            $table->string('short_name', Constants::TITLE_SHORT_LENGTH)->unique();
            $table->string('name', Constants::TITLE_LENGTH);
            $table->year('start_year');
            $table->year('end_year')->nullable();
            $table->unsignedBigInteger('total_semesters');
            $table->unsignedBigInteger('total_credits');
            $table->unsignedDecimal('pass_cgpa');
            $table->boolean('in_force')->default(false);
            $table->timestamps();
            $table->foreign('program_id', 'f_regulations_program_id')
                ->references('id')
                ->on('programs')
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
        Schema::table('regulations', function (Blueprint $table) {
            $table->dropForeign('f_regulations_program_id');
        });
        Schema::dropIfExists('regulations');

    }
}
