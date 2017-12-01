var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

gulp.task('concat', function () {
	return gulp.src('src/**/*css')
		.pipe(concat("style.css"))
		.pipe(gulp.dest('build/'));
});

gulp.task('watch', function () {
  return gulp.watch('src/**/*', ['concat']);
});


gulp.task("default", ['concat', "watch"])