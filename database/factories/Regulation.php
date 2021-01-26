<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Regulation;
use Faker\Generator as Faker;

$factory->define(Regulation::class, function (Faker $faker) {
    return [
        'program_id'=>$faker->numberBetween($min=1,$max=8),
        'short_name'=>$faker->text($maxNbChars = 20),
        'name'=>$faker->name(),
        'start_year'=>$faker->year($max = 'now'), // '1979-06-09' // DateTime('2003-03-15 02:00:49', 'Africa/Lagos')
        'end_year'=>$faker->year($max = 'now'), // '1979-06-09', // DateTime('2003-03-15 02:00:49', 'Africa/Lagos')
        'total_semesters'=>$faker->numberBetween($min=1,$max=8),
        'total_credits' =>$faker->numberBetween($min=1,$max=180),
        'pass_cgpa' =>$faker->randomFloat($nbMaxDecimals = 4, $min = 0, $max = 10), // 48.8932


    ];
});
