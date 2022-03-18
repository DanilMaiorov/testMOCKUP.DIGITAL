import gulp from 'gulp';
//src - откуда берем
//dest - куда сохраняем

//конфигурация 
import path from '../config/path.js';
import app from '../config/app.js';

//синтаксис CommonJS
//плагины
import gulpImageMin from 'gulp-imagemin';

function pugImages () {
    return gulp.src(path.img.src)//метод src в него передаем пути *означает выбор всех файлов в директории
    .pipe(gulpImageMin({ //нужно настроить
        interlaced: true,
        }))
    .pipe(gulp.dest(path.img.dest));
}
export default pugImages;