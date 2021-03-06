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
// 会員登録
// Route::post('/register', 'Auth\RegisterController@register')->name('register');
// Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

// 後ほど削除するかも？↓
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
