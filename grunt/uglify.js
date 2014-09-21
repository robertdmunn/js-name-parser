module.exports = {

	javascript : {
		files : {
			'dist/<%= pkg.name %>.min.js' : [ '<%= concat.javascript.dest %>' ]
		}
	},
	jquery : {
		files : {
			'dist/jquery.<%= pkg.name %>.min.js' : [ '<%= concat.jquery.dest %>' ]
		}
	},
	dist: {
		files: {
			'dist/browser-shims.min.js' : [ 'src/browser-shims.js']
		}
	}
};
