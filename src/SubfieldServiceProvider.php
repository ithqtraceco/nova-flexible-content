<?php

namespace Tolle\NovaFlexibleContent;

use Illuminate\Support\ServiceProvider;
use Tolle\NovaFlexibleContent\Http\Middleware\InterceptSubfieldDependsOn;

class SubfieldServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $router = $this->app['router'];

        if ($router->hasMiddlewareGroup('nova')) {
            $router->pushMiddlewareToGroup('nova', InterceptSubfieldDependsOn::class);
            return;
        }

        if (!$this->app->configurationIsCached()) {
            config()->set('nova.middleware', array_merge(
                config('nova.middleware', []),
                [InterceptSubfieldDependsOn::class]
            ));
        }
    }
}
