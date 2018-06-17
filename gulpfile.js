var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function() {
    console.log('Hooray - This is the gulp task');
});

gulp.task('html', function() {
    console.log('Imagine do something for html task');
});

gulp.task('styles', function() {
    console.log('Imagine do something for css task');
});

gulp.task('watch', function() {

    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });

});