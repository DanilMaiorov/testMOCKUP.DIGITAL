import news from '../db/news.json';

const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
    isProd: isProd,
    isDev: isDev,

    htmlMin: {
        collapseWhitespace: isProd //убирает пробелы
    },
    rename: { //нужны настройка
        suffix: ".min"
    },
    pug: { 
        pretty: isDev, //настройка чтобы файл index.html не сжимался
        data: { //настройка для передачи данных из json файла
            news: news
        }
    },
    webpack: { //сюда пишем настройки
        mode: isProd ? "production" : "development"
    },
    imageMin: {
        verbose: true //будем видеть размер изображение до и после
    },
    fonter: {
        formats: ['ttf', 'eot', 'woff', 'svg']
    }
};