var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var jade         = require('gulp-jade');
var sass         = require('gulp-sass');


var paths = {
  jade:     'jade/*.jade',
  jadeCode: 'jade/code/**/*.jade',
  styles:   'sass/**/*.sass'
}

var dest = {
  jade:   'build/',
  styles: 'build/css/'
}

gulp.task('styles', function () {
  return gulp.src(paths.styles)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(dest.styles))
})

gulp.task('jade', function () {
  return gulp.src(paths.jade)
        .pipe(jade({
          pretty: true
        }))
        .pipe(gulp.dest(dest.jade))
})

gulp.task('watch', function () {
  gulp.watch(paths.styles,   ['styles']);
  gulp.watch(paths.jade,     ['jade']);
  gulp.watch(paths.jadeCode, ['jade']);
})

gulp.task('default', ['jade', 'styles', 'watch'])
