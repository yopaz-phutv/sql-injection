<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LookupController;
use Illuminate\Support\Facades\Route;

Route::get('/', fn () => redirect(route('login')));
Route::get('/login', [AuthController::class, 'create'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::middleware(['auth.session'])->group(function () {
    Route::get('/lookup', [LookupController::class, 'index'])->name('lookup');
    Route::get('/lookup/search', [LookupController::class, 'search']);
});
