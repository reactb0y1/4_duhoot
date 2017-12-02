var gulp = require('gulp');
var concat = require('gulp-concat');			// Объединяем файлы
var watch = require('gulp-watch');				// Следим за изменениями
var uglify = require('gulp-uglify');			// Сжимаем JS
var csso = require('gulp-csso');				// Сжимаем CSS
var prefixer = require("gulp-autoprefixer");	// Добавляем префиксы
var uncss = require('gulp-uncss');				// Очишаем CSS от лишнего кода
var livereload = require('gulp-livereload');	

// CSS
gulp.task('CSS', function () {
	return gulp.src('src/**/*.css')
		.pipe(concat("style.css"))			// Склеиваем CSS
		.pipe(uncss({						// Чистим от ичшнего кода 
			html: ['build/index.html']
		}))
		.pipe(prefixer({					// Добавляем префиксы
			browsers: ['last 3 version', "> 1%", "ie 8", "ie 7"]
		}))
		.pipe(csso())					// Минифиируем CSS
		.pipe(gulp.dest('build/'));
});

// JS
gulp.task('JS', function () {
	return gulp.src('src/**/*.js')
		.pipe(concat("common.js"))		// Склеиваем JS
		.pipe(uglify())					// Минификация JS
		.pipe(gulp.dest('build/'));
});

// Отслеживание изменений
gulp.task('watch', function () {
  return gulp.watch('src/**/*', ['CSS', 'JS']);
});

// Функция по умолчанию
gulp.task("default", ['CSS', 'JS', "watch"])


/*


gulp-minify-css - этот минификатор не устанавливать - он нарушает пути
локальных файлов


*/

