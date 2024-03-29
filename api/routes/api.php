<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::group([
        'middleware' => 'web'
    ], function() {
        Route::get('logout', 'AuthController@logout');
    });
});

Route::group([
    'namespace' => 'Auth',
    'prefix' => 'auth',
], function () {
    Route::get('/{provider}', 'SocialLogin');
    Route::get('/{provider}/callback', 'SocialLoginCallback@commonCallback');
    Route::get('/{provider}/logout', 'SocialLogin@logout');
});

Route::group([
    'middleware' => 'web',
], function() {
    Route::get('test', 'TaskController@index');
    Route::get('posts', 'PostController@index');


Route::get('posts', 'PostController@index');

});
