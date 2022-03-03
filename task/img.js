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
import gulpImageMin from 'gulp-imagemin';
import gulpNewer from 'gulp-newer';
import gulpWebp from 'gulp-webp';
import gulpIf from 'gulp-if';

//обработка IMG
function img () {
    return gulp.src(path.img.src)//метод src в него передаем пути *означает выбор всех файлов в директории
    .pipe(gulpPlumber({ //нужно настроить
        errorHandler: gulpNotify.onError(error => ({//передать в качестве исполнителя метода плагин
            title: "IMG",  //в каком файле обнаружена ошибка
            message: error.message
        }))
    }))
    .pipe(gulpNewer(path.img.dest)) //указываем путь конченой директории
    .pipe(gulpWebp())
    .pipe(gulp.dest(path.img.dest))
    .pipe(gulp.src(path.img.src))
    .pipe(gulpNewer(path.img.dest))
    .pipe(gulpIf(app.isProd, gulpImageMin(app.imageMin)))
    .pipe(gulp.dest(path.img.dest));
} 

export default img;