<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\SubjectMeta;
use Faker\Generator as Faker;

$factory->define(SubjectMeta::class, function (Faker $faker) {
    return [
        'author_email'=>$faker->email(),
        'data'=>$faker->text($maxNbChars = 30),
        'subject_id'=>$faker->numberBetween($min=1,$max=5)
    ];
});
