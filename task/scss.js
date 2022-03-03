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
import gulpAutoprefixer from 'gulp-autoprefixer';
import gulpCsso from 'gulp-csso';
import gulpRename from 'gulp-rename';
import gulpSize from 'gulp-size';
import gulpShorthand from 'gulp-shorthand';
import gulpGroupMediaQueries from 'gulp-group-css-media-queries';
import gulpSass from 'gulp-sass'; //при подключении передаем еще и компилятор
import sass from 'sass';
import gulpWebpCss from 'gulp-webp-css';
//import gulpSassGlob from 'gulp-sass-glob'; Пока не нужен

const sassGulp = gulpSass(sass);

//обработка SCSS
function scss () {
    return gulp.src(path.scss.src, { sourcemaps: app.isDev })//метод src в него передаем пути *означает выбор всех файлов в директории
    .pipe(gulpPlumber({ //нужно настроить
        errorHandler: gulpNotify.onError(error => ({//передать в качестве исполнителя метода плагин
            title: "SCSS",  //в каком файле обнаружена ошибка
            message: error.message
        }))
    }))
    //.pipe(gulpSassGlob()) Пока не нужен
    .pipe(sassGulp())
    .pipe(gulpWebpCss())
    .pipe(gulpAutoprefixer())
    .pipe(gulpShorthand())
    .pipe(gulpGroupMediaQueries())
    .pipe(gulpSize({ title: "main.css"}))
    .pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }))
    .pipe(gulpRename({ //нужны настройка
        suffix: ".min"
    }))
    .pipe(gulpCsso())
    .pipe(gulpSize({ title: "main.min.css"}))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: true }));
} 
export default scss;