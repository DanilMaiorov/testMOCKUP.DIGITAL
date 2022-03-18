const pathSrc = './src';
const pathDest = './dist';

export default {
    root: pathDest,
    css: {
        src: pathSrc + '/css/*.css',
        watch: pathSrc + '/css/**/*.css',
        dest: pathDest + '/css'
    },
    scss: {
        src: pathSrc + '/sass/*.{sass,scss}',
        watch: pathSrc + '/sass/**/*.{sass,scss}',
        dest: pathDest + '/css'
    },
    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js'
    },
    img: {
        src: pathSrc + '/img/*.{png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF,svg,SVG}',
        watch: pathSrc + '/img/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF,svg,SVG}',
        dest: pathDest + '/img'
    },
    fonts: {
        src: pathSrc + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest: pathDest + '/fonts'
    },
    pug: {
        src: pathSrc + '/pug/*.pug',
        watch: pathSrc + '/pug/**/*.pug',
        dest: pathDest
    } 
};