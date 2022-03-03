import gulp from 'gulp';

//watch - наблюдатель
//series - последовательное выполнение задач
//parallel - параллельное выполнение задач

import browserSync from 'browser-sync';

//конфигурация 
import path from './config/path.js';
import app from './config/app.js';
//синтаксис CommonJS

//Подключаемые задачи
import clear from './task/clear.js';
import html from './task/html.js';
import scss from './task/scss.js';
import js from './task/js.js';
import img from './task/img.js';
import fonts from './task/fonts.js';
/* import css from './task/css.js'; */
/* import pug from './task/pug.js'; */

//настройка сервера
function server () {
    browserSync.init({
        server: {
            baseDir: path.root, //конечная директория
        }
    }); //вызываем метод init() и нужно передать конфигурацию
}

//настройка наблюдателя
function watcher () {
    //watch(path.pug.watch, pug);  либо html либо pug 
    gulp.watch(path.html.watch, html).on('all', browserSync.reload); //чтобы перезагрузка работала нужно дописать .on('all', browserSync.reload)
    //watch(path.css.watch, css).on('all', browserSync.reload);   либо scss либо css 
    gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);
    gulp.watch(path.js.watch, js).on('all', browserSync.reload);
    gulp.watch(path.img.watch, img).on('all', browserSync.reload);
    gulp.watch(path.fonts.watch, fonts).on('all', browserSync.reload);
}

const build = gulp.series( 
    clear,
    //pug, 
    //parallel( html/pug, scss/css, js, img, fonts ),
    gulp.parallel( html, scss, js, img, fonts )
);

const dev = gulp.series( 
    build,
    gulp.parallel( watcher, server )
);

//задачи (список задач можно посмотреть командой gulp --tasks)
//export { pug }; 
export { html };
//export { css };
export { scss };
export { js };
export { img };
export { fonts };

//сборка 
export default app.isProd ? build : dev;