<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Specialization extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('specializations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('short_name', Constants::TITLE_SHORT_LENGTH)->unique();
            $table->string('name', Constants::TITLE_LENGTH);
            $table->unsignedBigInteger('department_id');
            $table->unsignedBigInteger('program_id');
            $table->boolean('in_force')->default(true);
            $table->timestamps();
            $table->foreign('department_id', 'f_specializations_department_id')
                ->references('id')
                ->on('departments')
                ->onDelete('cascade');
            $table->foreign('program_id', 'f_specializations_program_id')
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
        Schema::table('specializations', function (Blueprint $table) {
            $table->dropForeign('f_specializations_department_id');
            $table->dropForeign('f_specializations_program_id');
        });
        Schema::dropIfExists('specializations');

    }
}
