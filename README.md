# Statamic Bard StyleSelect Plugin

Lets you select of predefined styles (classes) and apply them to inline text.

## Installation

Install the addon using Composer:

```bash
composer require lampone/bard-style-select
```

Publish the config to define your own styles:

```bash
php please vendor:publish --tag=bard-style-select-config
```

```php

return [
    'styles' => [
        [
            'classes' => 'custom-underline',                // written like in html "class-1 class-2"
            'name' => 'Custom Underline',                   // name display in cp
            'cp_style' => 'border-bottom: 1px solid gray;'  // style applied in cp
        ],
    ]
];
```

## Thanks
Thanks to https://github.com/jacksleight/bard-paragraph-style and https://github.com/xndbogdan/statamic-bard-text-color for examples on how to develop a Bard-Plugin.
