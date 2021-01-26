<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\InstructionScheme;
use Faker\Generator as Faker;

$factory->define(InstructionScheme::class, function (Faker $faker) {
    return [
        'specialization_id' => $faker->numberBetween($min = 1, $max = 8),
        'semester_id' => $faker->numberBetween($min = 1, $max = 8),
        'subject_category_id' => $faker->numberBetween($min = 1, $max = 8),
        'subject_offering_type_id' =>$faker->numberBetween($min = 1, $max = 8),
        'scheme' => $faker->sentence(),
        'sequence_number' =>$faker->numberBetween($min = 1, $max = 8)
    ];
});
