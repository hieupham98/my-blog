<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory, SoftDeletes;


    protected $fillable = [
        'slug',
        'title',
        'content',
        'image_url',
        'image_cover_url',
        'user_id',
        'visibility'
    ];

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
