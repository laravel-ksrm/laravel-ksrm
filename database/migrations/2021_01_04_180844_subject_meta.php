<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SubjectMeta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subject_metas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->enum('category', ['review', 'rating', 'resource']);
            $table->string('author_email');
            $table->longText('data');
            $table->unsignedBigInteger('subject_id');
            $table->timestamps();
            $table->foreign('subject_id', 'f_subject_meta_subject_id')
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
        Schema::table('subject_meta', function(Blueprint $table) {
            $table->dropForeign('f_subject_meta_subject_id');
        });
        Schema::dropIfExists('subject_meta');
    }
}
