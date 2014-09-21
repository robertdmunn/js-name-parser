// based on PHP Name Parser by Josh Fraser (joshfraser.com)
// http://www.onlineaspect.com/2009/08/17/splitting-names/
// ported to JavaScript by Mark Pemburn (pemburnia.com)
// jquery plugin and Grunt configuration by Robert Munn (robert.d.munn@gmail.com)
// released under Apache 2.0 license


(function( $ ) {
	var parse = function( nameString ) {
		var np = new NameParse();
		return np.parse( nameString );
	};

	$.fn.NameParse = {
		parse: parse
	};
