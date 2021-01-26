<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Semester extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('semesters', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('regulation_id')->index();
            $table->string('short_name', Constants::TITLE_SHORT_LENGTH);
            $table->string('name', Constants::TITLE_LENGTH);
            $table->unsignedBigInteger('semester_number');
            $table->boolean('in_force')->default(false);
            $table->timestamps();
            $table->unique(['regulation_id', 'short_name']);
            $table->foreign('regulation_id', 'f_semesters_regulation_id')
                ->references('id')
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
        Schema::table('semesters', function (Blueprint $table) {
            $table->dropForeign('f_semesters_regulation_id');
        });
        Schema::dropIfExists('semesters');

    }
}
