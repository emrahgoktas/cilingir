<?php

/**
 * `routes/web.php` içine birleştirin. Controller sınıfları projede tanımlı olmalı.
 * Route isimleri Ziggy ile Show.vue içinde window.route(...) için kullanılabilir.
 */

use App\Http\Controllers\AdCampaignController;
use App\Http\Controllers\AdCopyController;
use App\Http\Controllers\AdMetricController;
use App\Http\Controllers\AdTaskController;
use Illuminate\Support\Facades\Route;

Route::resource('ads', AdCampaignController::class);

Route::resource('ads.tasks', AdTaskController::class)->shallow();
Route::patch('ads/{ad}/tasks/{task}/toggle', [AdTaskController::class, 'toggle'])
    ->name('ads.tasks.toggle');

Route::resource('ads.copies', AdCopyController::class)->shallow();

Route::post('ads/{ad}/metrics', [AdMetricController::class, 'store'])
    ->name('ads.metrics.store');

Route::patch('ads/{ad}/strategy', [AdCampaignController::class, 'updateStrategy'])
    ->name('ads.strategy.update');
