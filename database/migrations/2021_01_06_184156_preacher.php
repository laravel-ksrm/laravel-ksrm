<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Preacher extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        

        Schema::create('preachers',function(Blueprint $table){
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('department_name', Constants::TITLE_LENGTH)->nullable();
            $table->timestamps();
            $table->foreign('department_name')
                ->references('short_name')
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
        Schema::table('preachers', function (Blueprint $table) {
            $table->dropForeign('department_name');
        });
        Schema::dropIfExists('preachers');
        
    }
}
