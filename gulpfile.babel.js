import gulp from 'gulp';
import yargs from 'yargs';
//import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';



const PRODUCTION =yargs.argv.prod;
const sass = require('gulp-sass')(require('sass'));

export const styles = () => {
    return gulp.src('src/assets/scss/bundle.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(PRODUCTION,cleanCSS({compatibility: 'ie8'})))
        .pipe(gulp.dest('dist/assets/css'));

}
//export default hello;


//fresh code is here 
// export const hello = (done) => {
//     console.log(PRODUCTION);
//     done();
// }
// export default hello;
