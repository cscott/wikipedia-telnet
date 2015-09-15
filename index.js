// Wikipedia telnet server
//
// To install dependencies:
// npm install request
// npm install cheerio
// npm install mw-ocg-texter

var net = require( 'net' );
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');

var standalone = require('mw-ocg-texter/lib/standalone');

var port = 1081;
// Logo from https://en.wikipedia.org/wiki/ASCII_art, plus some instructions.
var logo = fs.readFileSync( 'wiki-logo.txt' );
var domain = 'en.wikipedia.org';
var ps1 = '\n\n>>> ';

// Cache siteinfo requests for some extra efficiency.
var cachedSiteinfo = Object.create(null);
var siteinfoCacher = function(bundler, wikis, log) {
	var key = '$' + wikis.map( function( w ) { return w.baseurl; } ).join( '|' );
	if (!cachedSiteinfo[key]) {
		cachedSiteinfo[key] = new bundler.siteinfo(
			wikis,
			function () { /* don't log request retries */ }
		);
	}
	return cachedSiteinfo[key];
};

function recv( socket, data ) {

    data = data.toString().replace( /(\r\n?|\n)/gm, '' );

	if ( /^host (.*\.org)$/.test( data ) ) {
		domain = data.slice( 5 );
		socket.write( 'Using '+domain+' for future articles.\n' );
		socket.write( ps1 );
		return;
	}

    if ( data === 'quit' ) {
        socket.end( 'Bye!\n' );
        return;
    }

	standalone.convert({
		domain: domain,
		title: data,
		stream: socket,
		// siteinfo cacher is optional, but it speeds things up
		// by eliminating an unnecessary action API request for each article
		siteinfo: siteinfoCacher,
	}).catch(function( e ) {
		socket.write( 'Error: ' + String( e ).trim() + '\n' );
	}).then(function() { socket.write( ps1 ); });
}

console.log('Listening on port', port);
net.createServer( function ( socket ) {
    socket.write( logo );
    socket.write( ps1 );
    socket.on( 'data', recv.bind( null, socket ) );
} ).listen( port );
