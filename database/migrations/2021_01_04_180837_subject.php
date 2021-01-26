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
