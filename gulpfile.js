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
import pug from './task/pug.js'; 
import scss from './task/scss.js';
import js from './task/js.js';
import img from './task/img.js';
import pugImages from './task/pugImages.js';
import fonts from './task/fonts.js';

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
    gulp.watch(path.pug.watch, pug).on('all', browserSync.reload);
    gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);
    gulp.watch(path.js.watch, js).on('all', browserSync.reload);
    gulp.watch(path.img.watch, img).on('all', browserSync.reload);
    gulp.watch(path.img.watch, pugImages).on('all', browserSync.reload);
    gulp.watch(path.fonts.watch, fonts).on('all', browserSync.reload);
}

const build = gulp.series( 
    clear,
    gulp.parallel( pug, scss, js, img, pugImages, fonts )
);

const dev = gulp.series( 
    build,
    gulp.parallel( watcher, server )
);

//задачи (список задач можно посмотреть командой gulp --tasks)
export { pug }; 
export { scss };
export { js };
export { img };
export { pugImages };
export { fonts };

//сборка 
export default app.isProd ? build : dev;