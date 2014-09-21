/*	module.exports = function(grunt) {

	grunt.registerTask('default', ["concat", "uglify", "qunit", "jshint"]);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
	 });
	require('load-grunt-config')(grunt);

};	*/


module.exports = function(grunt) {
	var path = require('path');
	
	require('load-grunt-config')(grunt, {
		//pkg: grunt.file.readJSON('package.json'),
	    configPath: path.join(process.cwd(), 'grunt'), //path to task.js files, defaults to grunt dir
	    init: true, //auto grunt.initConfig
	    data: { //data passed into config.  Can use with <%= test %>
	    	 pkg: require('./package.json')
	    },
	    loadGruntTasks: { //can optionally pass options to load-grunt-tasks.  If you set to false, it will disable auto loading tasks.
	        pattern: 'grunt-*',
	        scope: 'devDependencies'
	    },
	    postProcess: function(config) {} //can post process config object before it gets passed to grunt
	});
	grunt.registerTask('default', ["concat", "uglify", "qunit", "jshint"]);
};