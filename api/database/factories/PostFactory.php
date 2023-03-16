<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $images = [
            'demo1.jpg',
            'nodejs.png',
            'react.png'
        ];
        return [
            'title' => $this->faker->name,
            'slug' => $this->faker->name,
            'content' => $this->faker->text,
            'visibility' => 'public',
            'image_url' => $images[array_rand($images, 1)],
            'favorites' => 10,
            'user_id' => 1,
        ];
    }
}
