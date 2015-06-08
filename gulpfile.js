/**
 * Created by TomCao on 15/6/8.
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');

gulp.task('minifyjs', function() {
    return gulp.src('lib/*.js')
        .pipe(uglify())    //压缩
        .pipe(rename('markedjs_extra.min.js')) //重命名
        .pipe(gulp.dest('./'));
});

gulp.task('clean',function(){
    return gulp.src('./markedjs_extra.min.js')
        .pipe(clean());
});

gulp.task('default', ['clean'], function() {
    gulp.start('minifyjs');
});