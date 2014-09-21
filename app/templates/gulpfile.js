'use strict';

var gulp = require('gulp'),
    serveStatic = require('serve-static'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-ruby-sass'),
    gulpif = require('gulp-if'),
    $ = require('gulp-load-plugins')();

gulp.task('default', [], function() {

});

gulp.task('scripts', function() {
    return browserify({
            paths: ['./node_modules','./app/scripts/'],
            entries: ['./app/scripts/index.js'],
            transform: ['reactify'],
            debug: true
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('.tmp/scripts/'));
});

gulp.task('styles', function() {
    return gulp.src('app/styles/main.scss')
        .pipe(sass({
            // sourcemap: true,
            // sourcemapPath: '../scss'
        }))
        .pipe($.autoprefixer())
        .pipe($.rename('bundle.css'))
        .pipe(gulp.dest('.tmp/styles/'))
});

gulp.task('watch', ['styles','scripts','connect'], function() {
    // watch for changes
    var server = $.livereload();

    // reload browser
    gulp.watch([
        'app/*.html',
        '.tmp/**/*.{js,css}'
    ]).on('change', function (file) {
        server.changed(file.path);
    });

    // build
    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.scss', ['styles']);

    // trigger initial reload
    server.changed();
});

gulp.task('connect', function() {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(serveStatic('.tmp')) // .tmp goes before app
        .use(serveStatic('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function() {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('extras', function () {
    return gulp.src(['app/*.*', '!app/*.html'], { dot: true })
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('html', ['styles', 'scripts'], function () {
    var assets = $.useref.assets({searchPath: '{.tmp,app}'});

    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', $.uglify()))
        .pipe(gulpif('*.css', $.minifyCss()))
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

gulp.task('build', ['html','extras','images']);
