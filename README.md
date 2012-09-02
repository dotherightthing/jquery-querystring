# jquery.querystring.js

@author gehsekky

code taken from [here](http://stackoverflow.com/questions/901115/get-query-string-values-in-javascript/901144)

example:

    var qvalue = $.querystring( window.location.search, 'q' );
    var qvalue = $.querystring( $('a').attr('href'), 'q' );
    var qvalue = $.querystring( data_href, 'q' );
