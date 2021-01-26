<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Syllabi;
use Faker\Generator as Faker;

$factory->define(Syllabi::class, function (Faker $faker) {
    return [
        'excerpt'=>$faker->sentence(),
        'objectives'=>$faker->sentence(),
        'cos'=>$faker->sentence(),
        'syllabus'=>$faker->sentence(),
        'textbooks'=>$faker->sentence(),
        'reference_books'=>$faker->sentence(),
        'subject_id'=>$faker->numberBetween($min=1,$max=8),
    ];
});
