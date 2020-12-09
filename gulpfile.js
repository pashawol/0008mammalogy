'use strict';

global.$ = {
	gulp: require('gulp'), 

	bourbon: require('node-bourbon'),
	cleanCSS: require('gulp-clean-css'),
	gulpif: require('gulp-if'), 
	envDev: false,
	gp: require('gulp-load-plugins' )(),
	gcmq: require('gulp-group-css-media-queries'),
	browserSync: require('browser-sync').create(),

	path: {
		tasks: require('./gulp/config/tasks.js'),
	}
}
$.path.tasks.forEach(function (taskPath){
		require(taskPath)();
	});
		
		 
// $.gulp.task('default', $.gulp.series(
// 	$.gulp.parallel('svg','pug','scripts:lib','scripts'),
// 	$.gulp.parallel('sass','watch','serv')
// ));

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('svg','pug','scripts'),
	$.gulp.parallel('sass','watch','serv')
));