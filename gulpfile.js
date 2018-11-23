var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');

var coffeeSourcess = ['components/coffee/tagline.coffee'];
var jsSourcess = [
    'components/scripts/pixgrid.js',
    'components/scripts/rclick.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js'
];

var sassSourcess = ['components/sass/style.scss'];

gulp.task('coffee', function () {
    gulp.src(coffeeSourcess)
        .pipe(coffee({ bare: true })
            .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function () {
    gulp.src(jsSourcess)
        .pipe(concat('script.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function () {
    gulp.src(sassSourcess)
        .pipe(compass({
            sass: 'components/sass',
            image: 'builds/development/images',
            style: 'expanded',
            line_comments: true,
            sourcemap: true
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('builds/development/css'))
});

gulp.task('default', ['coffee','js','compass'])