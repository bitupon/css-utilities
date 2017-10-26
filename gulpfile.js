'use strict';

var pkg = require('./package.json'),
    gulp = require("gulp"),
    sass = require('gulp-sass'),
    notify = require("gulp-notify"),
    paths = {
        scss: './scss/',      
        css: './css/'       
    };

/*
 * @task: sass
 * Compile all SCSS files to CSS, put in DIST/CSS folder.
 */
gulp.task('sass', function () {
    var scssArr = [
        paths.scss + 'utilities.scss'       
    ];

    return gulp.src(scssArr)
        .pipe(sass())
        .on('error', notify.onError(function (error) {
            return 'An error occurred while compiling sass.\nLook in the console for details.\n' + error;
        }))
        .pipe(gulp.dest(paths.css))
        .pipe(notify({
            message: "Compilation Successful"
        }));
});

/*
 * @task: sass-min
 * Compile all SCSS files to CSS, put in DIST/CSS folder.
 */
// gulp.task('sass-min', function () {
//     var scssArr = [
//         paths.scss + 'utilities.scss'       
//     ];

//     return gulp.src(scssArr)
//         .pipe(sass({outputStyle: 'compressed'}))
//         .pipe(rename({           
//             suffix: ".min"            
//         }))
//         .on('error', notify.onError(function (error) {
//             return 'An error occurred while compiling sass.\nLook in the console for details.\n' + error;
//         }))
//         .pipe(gulp.dest(paths.css))
//         .pipe(notify({
//             message: "Compilation Successful"
//         }));
// });


// gulp.task('serve', ['sass','sass-min', 'scripts', 'scripts-prod', 'scripts-d' , 'dist'], function() {
//     gulp.watch(['scss/**/*.scss'], ['sass', 'dist-css']);
//     gulp.watch(['scripts/custom/*.js'], ['scripts', 'dist-js', 'scripts-d']);
//     gulp.watch(['scripts/ext/*.js'], ['dist-ext', 'dist-js']);
// });

// gulp.task('serve-css', ['sass','sass-min', 'dist-css'], function() {
//     gulp.watch(['scss/**/*.scss'], ['sass', 'dist-css']);
// });

// gulp.task('serve-js', ['scripts','scripts-prod', 'dist-js'], function() {
//     gulp.watch(['scripts/custom/*.js'], ['scripts', 'dist-js']);
//     gulp.watch(['scripts/ext/*.js'], ['scripts', 'dist-ext']);
// });

// gulp.task('default', ['sass','sass-min', 'scripts','scripts-prod']);