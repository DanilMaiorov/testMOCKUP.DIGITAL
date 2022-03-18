
const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
    isProd: isProd,
    isDev: isDev,
    pug: { 
        pretty: true, //настройка чтобы файл index.html не сжимался
    },
    rename: { //нужны настройка
        suffix: ".min"
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