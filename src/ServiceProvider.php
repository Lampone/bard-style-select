<?php

namespace Lampone\BardStyleSelect;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__ . '/../dist/js/bard.js',
    ];

    public function boot()
    {
        parent::boot();

        $this->publishes([
            __DIR__ . '/../config/bard-style-select.php' => config_path('bard-style-select.php'),
        ], 'bard-style-select-config');

        Augmentor::addMark(StyleSelect::class);
        Statamic::provideToScript([
            'bard-style-select' => config('bard-style-select'),
        ]);
    }
}
