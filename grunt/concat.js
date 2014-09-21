module.exports = {

	javascript : {
		src : [ 'src/wrappers/javascript/javascript.pre.js','src/nameparse.js','src/wrappers/javascript/javascript.post.js' ],
		dest : 'dist/<%= pkg.name %>.js'
	},
	jquery : {
		src : [ 'src/wrappers/jquery/jquery.pre.js','src/nameparse.js','src/wrappers/jquery/jquery.post.js' ],
		dest : 'dist/jquery.<%= pkg.name %>.js'
	},
	shims : {
		src : [ 'src/browser-shims.js' ],
		dest : 'dist/browser-shims.js'
	}
};
