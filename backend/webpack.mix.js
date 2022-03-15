const mix = require("laravel-mix");
require("laravel-mix-alias");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/main.js", "public/js").version();
// .sass('resources/sass/main.scss', 'public/css');

mix.override(config => {
    config.module.rules.push({
        test: /\.vue$/,
        use: [{ loader: "vue-svg-inline-loader" }]
    });
});

mix.alias({
    "@": "/resources/js",
    "~": "/resources/js/components"
});

mix.browserSync("http://localhost:8000/");
