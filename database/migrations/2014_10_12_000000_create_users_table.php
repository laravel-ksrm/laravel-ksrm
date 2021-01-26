<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->string('regdno');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->BigInteger('join_year');
            $table->unsignedBigInteger('phone')->nullable();
            $table->string('is_lateral_entry');
            $table->string('social_category');
            $table->string('admission_category');
            $table->string('residency');
            $table->string('gender');
            $table->unsignedBigInteger('specialization_id');
            $table->string('regulation_id');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
