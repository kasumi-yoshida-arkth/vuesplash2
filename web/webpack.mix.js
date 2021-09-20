const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);

// browserSyncはJSやPHPファイルが変更された時に自動的にブラウザがリロードされる
mix.browserSync({
    proxy: '0.0.0.0:8081', // アプリの起動アドレス
    open: false // ブラウザを自動で開かない
})
//  JSとVueコンポーネントをコンパイルする
  .js('resources/js/app.js', 'public/js')
//  コンパイルしたファイルのバージョニングが有効になる
  .version()
