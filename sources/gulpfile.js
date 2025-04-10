const sass = require('gulp-sass')(require('sass'));
const jsCompress = require('gulp-uglify');
const imgComp = require('gulp-imagemin');

function CompressImg() {
    return gulp.src('./sources/images').pipe(imgComp()).pipe(gulp.dest('./build/images'));
}

function compressJs() {
    return gulp.src('./sources/.js').pipe(jsCompress())
        .pipe(gulp.dest('./build/scripts'));
}

function compileSass() {
    return gulp.src('./sources/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}

exports.default = function() {
    gulp.watch('./source/styles/*.main.scss', { ignoreInitial: false }, gulp.series(compileSass));
    gulp.watch('./source/styles/*.js', { ignoreInitial: false }, gulp.series(compressJs));
    gulp.watch('./source/*images', { ignoreInitial: false }, gulp.series(CompressImg));
}



