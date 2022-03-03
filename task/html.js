import gulp from 'gulp';
//src - откуда берем
//dest - куда сохраняем

//конфигурация 
import path from '../config/path.js';
import app from '../config/app.js';

//плагины
import gulpPlumber from 'gulp-plumber';
import gulpNotify from 'gulp-notify';
import gulpFileInclude from 'gulp-file-include';
import htmlMin from 'gulp-htmlmin'; //нужно настраивать
import gulpSize from 'gulp-size';
import gulpWebpHtml from 'gulp-webp-html';

//обработка HTML
function html () {
    return gulp.src(path.html.src)//метод src в него передаем пути *означает выбор всех файлов в директории
    .pipe(gulpPlumber({ //нужно настроить
        errorHandler: gulpNotify.onError(error => ({//передать в качестве исполнителя метода плагин
            title: "HTML",  //в каком файле обнаружена ошибка
            message: error.message
        }))
    }))
    .pipe(gulpFileInclude())
    .pipe(gulpWebpHtml())
    .pipe(gulpSize({ title: "До сжатия"}))
    .pipe(htmlMin(app.htmlMin))
    .pipe(gulpSize({ title: "После сжатия"}))
    .pipe(gulp.dest(path.html.dest));
}
export default html;