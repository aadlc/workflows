var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');
var coffeeSourcess = ['components/coffee/tagline.coffe'];

gulp.task('coffee', function () {
    gulp.src(coffeeSourcess)
        .pipe(coffee({ bare: true })
            .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
});