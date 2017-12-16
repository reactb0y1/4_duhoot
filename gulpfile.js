var gulp = require('gulp');
var concat = require('gulp-concat');			// Объединяем файлы
var watch = require('gulp-watch');				// Следим за изменениями
var uglify = require('gulp-uglify');			// Сжимаем JS
var csso = require('gulp-csso');				// Сжимаем CSS
var prefixer = require("gulp-autoprefixer");	// Добавляем префиксы
var uncss = require('gulp-uncss');				// Очишаем CSS от лишнего кода
var less = require('gulp-less');				// Для препроцессора
var plumber = require('gulp-plumber');			// предохранение от вылета
// var path = require('path');
// var connect = require('gulp-connect'); 				//livereload
var livereload = require('gulp-livereload');

/*
// Локальный сервер для разработки
gulp.task('connect', function(){
	connect.server({ //настриваем конфиги сервера
		root: ['../'], //корневая директория запуска сервера
		port: 9999, //какой порт будем использовать
		livereload: true //инициализируем работу LiveReload
	});
});*/

// CSS
gulp.task('CSS', function () {
	return gulp.src('src/**/*.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(concat("style.css"))			// Склеиваем CSS
		.pipe(uncss({						// Чистим от лишнего кода 
			html: ['build/index.html']
			ignore: ['/\.filters__list-item_home/']
		}))
		.pipe(prefixer({					// Добавляем префиксы
			browsers: ['last 3 version', "> 1%", "ie 8", "ie 7"]
		}))
		// .pipe(csso())					// Минифиируем CSS
		.pipe(gulp.dest('build/'))
		// .pipe(connect.reload());
		// .pipe(livereload());
});

// JS
gulp.task('JS', function () {
	return gulp.src('src/**/*.js')
		.pipe(plumber())
		.pipe(concat("common.js"))		// Склеиваем JS
		// .pipe(uglify())					// Минификация JS
		.pipe(gulp.dest('build/'))
		// .pipe(connect.reload());
		// .pipe(livereload());
});

// Отслеживание изменений
gulp.task('watch', function () {
  // livereload.listen();
  gulp.watch('src/**/*', ['CSS', 'JS']);
});

// Функция по умолчанию
gulp.task("default", ['CSS', 'JS', "watch"])


/*

npm i gulp-imagemin -D
npm i gulp-connect -D
npm install gulp-less
	LESS
	Less2Css

Настроить отслеживание изменений в html-файле

gulp-minify-css - этот минификатор не устанавливать - он нарушает пути
локальных файлов


*/

