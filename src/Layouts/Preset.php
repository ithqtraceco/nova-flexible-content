<?php

namespace Tolle\NovaFlexibleContent\Layouts;

use Tolle\NovaFlexibleContent\Flexible;

abstract class Preset
{
    /**
     * Execute the preset configuration
     *
     * @return void
     */
    abstract public function handle(Flexible $field);
}
