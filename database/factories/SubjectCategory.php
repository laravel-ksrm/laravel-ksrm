<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\SubjectCategory;
use Faker\Generator as Faker;

$factory->define(SubjectCategory::class, function (Faker $faker) {
    return [
        'short_name'=>$faker->text($maxNbChars = 30),
        'name'=>$faker->name(),
    ];
}); 