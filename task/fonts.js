import gulp from 'gulp';

//конфигурация 
import path from '../config/path.js';
import app from '../config/app.js';

//синтаксис CommonJS
//плагины
import gulpPlumber from 'gulp-plumber';
import gulpNotify from 'gulp-notify';
import gulpNewer from 'gulp-newer';
import gulpFonter from 'gulp-fonter';
import gulpTtf2Woff2 from 'gulp-ttf2woff2';

//обработка FONTS
function fonts () {
    return gulp.src(path.fonts.src)//метод src в него передаем пути *означает выбор всех файлов в директории
    .pipe(gulpPlumber({ //нужно настроить
        errorHandler: gulpNotify.onError(error => ({//передать в качестве исполнителя метода плагин
            title: "FONTS",  //в каком файле обнаружена ошибка
            message: error.message
        }))
    }))
    .pipe(gulpNewer(path.fonts.dest)) //указываем путь конченой директории
    .pipe(gulpFonter(app.fonter))
    .pipe(gulp.dest(path.fonts.dest))
    .pipe(gulpTtf2Woff2())
    .pipe(gulp.dest(path.fonts.dest));
} 

export default fonts;