<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Subject;
use Faker\Generator as Faker;

$factory->define(Subject::class, function (Faker $faker) {
    return [
        'code'=>$faker->text($maxNbChars = 30),
        'short_name'=>$faker->text($maxNbChars = 30),
        'name'=>$faker->name(),
        'department_id'=>$faker->numberBetween($min=1,$max=8),
        'is_theory'=>$faker->boolean(),
        'is_lab'=>$faker->boolean(),
        'is_project'=>$faker->boolean()
    ];
});
