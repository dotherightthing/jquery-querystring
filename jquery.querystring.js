/*
 * File: jquery.querystring.js
 * Source: https://github.com/dotherightthing/jquery-querystring
 * Forked from: https://github.com/gehsekky/jquery-querystring
 * Change: url now an option
 * Change: code validated @ jshint.com
 * Usage: $.querystring( window.location.search, 'foo' );
 * Usage: $.querystring( $('a').attr('href'), 'foo' );
 * Usage: $.querystring( data_href, 'foo' );
 */

	// Pass jQuery to a self executing function (closure) that maps it to the dollar sign
	// so that it can't be overwritten by another library in the scope of its execution
	(function($){
		
		/*jshint browser:true, jquery:true, strict:true, devel:true */
		"use strict";		
		
		$.extend({
			querystring: function(url, name) {
				var match = new RegExp('[?&]' + name + '=([^&]*)').exec( url );
				return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
			}
		});	
	})(jQuery);
