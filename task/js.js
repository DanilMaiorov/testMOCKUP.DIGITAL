import gulp from 'gulp';
//src - откуда берем
//dest - куда сохраняем

//конфигурация 
import path from '../config/path.js';
import app from '../config/app.js';

//плагины
import gulpPlumber from 'gulp-plumber';
import gulpNotify from 'gulp-notify';
import gulpBabel from 'gulp-babel';
import webpack from 'webpack-stream';

//обработка JS
function js () {
    return gulp.src(path.js.src, { sourcemaps: app.isDev })//метод src в него передаем пути *означает выбор всех файлов в директории
    .pipe(gulpPlumber({ //нужно настроить
        errorHandler: gulpNotify.onError(error => ({//передать в качестве исполнителя метода плагин
            title: "JS",  //в каком файле обнаружена ошибка
            message: error.message
        }))
    }))
    .pipe(gulpBabel())
    .pipe(webpack(app.webpack))
    .pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }));
} 
export default js;