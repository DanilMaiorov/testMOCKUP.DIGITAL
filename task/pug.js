import gulp from 'gulp';
//src - откуда берем
//dest - куда сохраняем

//конфигурация 
import path from '../config/path.js';
import app from '../config/app.js';

//синтаксис CommonJS
//плагины
import gulpPlumber from 'gulp-plumber';
import gulpNotify from 'gulp-notify';
import gulpPug from 'gulp-pug';
import gulpWebpHtml from 'gulp-webp-html';

//обработка PUG
function pug () {
    return gulp.src(path.pug.src)//метод src в него передаем пути *означает выбор всех файлов в директории
    .pipe(gulpPlumber({ //нужно настроить
        errorHandler: gulpNotify.onError(error => ({//передать в качестве исполнителя метода плагин
            title: "PUG",  //в каком файле обнаружена ошибка
            message: error.message
        }))
    }))
    .pipe(gulpPug(app.pug))
    .pipe(gulpWebpHtml())
    .pipe(gulp.dest(path.pug.dest));
} 
export default pug;