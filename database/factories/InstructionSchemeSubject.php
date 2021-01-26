<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\InstructionSchemeSubject;
use Faker\Generator as Faker;

$factory->define(InstructionSchemeSubject::class, function (Faker $faker) {
    return [
        'instruction_scheme_id'=>$faker->numberBetween($min = 1, $max = 8),
        'subject_id'=>$faker->numberBetween($min = 1, $max = 8)
    ];
});
