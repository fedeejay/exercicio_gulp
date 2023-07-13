// Importar os módulos do Gulp
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa para compilar o SASS
gulp.task('sass', function () {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./build/styles'));
});

// Tarefa para comprimir imagens
gulp.task('imagemin', function () {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
});

// Tarefa para minificar o JavaScript
gulp.task('uglify', function () {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
});

// Tarefa padrão
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));


