// var gulp = require('gulp');
 
// gulp.task('hello', function () {
//   console.log('Hello, World!')
  
//   done();
// }
// );

import gulp from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';

const PRODUCTION = yargs.argv.prod;

// export const hello = (done) => {
//   console.log(PRODUCTION);
//   done();
// }

export const styles = () => {
  return gulp.src('src/assets/scss/bundle.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/asset/css'));  
}
gulp.task('default', gulp.series('styles'));
// export default hello;