var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var gutil = require('gulp-util');
var sass = require('gulp-ruby-sass');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('js', function() {
	return gulp.src(['js/lib/transition.js',
					'js/lib/collapse.js',
					'js/lib/moment.min.js',
					'js/lib/*.js',
					'js/*.js'])
		.pipe(concat('ng-datetime.min.js'))
		.pipe(ngmin())
		.pipe(uglify({mangle: false}))
		.pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
    return gulp.src(['css/bootstrap.css', 'css/*.css'])
		.pipe(cssmin())
		.pipe(concat('ng-datetime.min.css'))
		.pipe(gulp.dest('dist'));

});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('css/*', ['css']);
});

gulp.task('default', ['js', 'css', 'watch']);
