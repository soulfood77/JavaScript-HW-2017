/* globals process */
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

// HACK not recommended
// set port
// eslint-disable-next-line no-process-env
// const port = process.env.PORT || 3001;

gulp.task('server', () => {
    const app = require('./app');
    app.listen(3001, () => console.log('Server working at 3001'));
});

gulp.task('dev', ['server'], () => {
    return nodemon({
        ext: 'js',
        tasks: ['server'],
        script: 'server.js',
    });
});
