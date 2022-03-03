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
import gulpConcat from 'gulp-concat';
import gulpCssImport from 'gulp-cssimport';
import gulpAutoprefixer from 'gulp-autoprefixer';
import gulpCsso from 'gulp-csso';
import gulpRename from 'gulp-rename';
import gulpSize from 'gulp-size';
import gulpShorthand from 'gulp-shorthand';
import gulpGroupMediaQueries from 'gulp-group-css-media-queries';
import gulpWebpCss from 'gulp-webp-css';

//обработка CSS
function css () {
    return sgulp.rc(path.css.src, { sourcemaps: app.isDev })//метод src в него передаем пути *означает выбор всех файлов в директории
    .pipe(gulpPlumber({ //нужно настроить
        errorHandler: gulpNotify.onError(error => ({//передать в качестве исполнителя метода плагин
            title: "CSS",  //в каком файле обнаружена ошибка
            message: error.message
        }))
    }))

    .pipe(gulpConcat('main.css'))
    .pipe(gulpCssImport())
    .pipe(gulpWebpCss())
    .pipe(gulpAutoprefixer())
    .pipe(gulpShorthand())
    .pipe(gulpGroupMediaQueries())
    .pipe(gulpSize({ title: "main.css"}))
    .pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }))
    .pipe(gulpRename(app.rename))
    .pipe(gulpCsso())
    .pipe(gulpSize({ title: "main.min.css"}))
    .pipe(gulp.dest(path.css.dest, { sourcemaps: true }));
} 

export default css;