/*
var gulp = require('gulp');

gulp.task('default', function() {
    gulp.src('app/*.js')
    .pipe(gulp.dest('dist'));
});
*/





var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
    var src = gulp.src('app/script.js');
    var dest = gulp.dest('dist');
    
    return src
    .pipe(uglify())
    .pipe(dest);
});

gulp.task('default', ['js']);