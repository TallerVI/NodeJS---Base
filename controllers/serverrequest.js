/**
 * New node file
 */
var app				= require ("../app");
var http			= app.get("http");

var load = function(hostname, path, param, port, method, request, response, callback){
	

	var options;
	
	if(method == 'POST'){
		var querystring = require('querystring');
		var post_data = querystring.stringify(param);
		options = {
				hostname : hostname,
				headers : {
					'Content-Type': "application/x-www-form-urlencoded",
					'Content-Length': post_data.length
				},
				path : path,
				port : port,
				method : method
		};
	} else {
		options = {
				hostname : hostname,
				path : path + "/" + param || "",
				port : port,
				method : method
		};
	}
	
	
	
	var req;
	if(callback instanceof Function){
		req = http.request(options, callback);
	} else {
		req = http.request(options, ( res ) => {
			res.on('data', (resource) => {
				response.jsonp(resource.toString());
			});
		});
	}

	req.on('error',( error ) => {
		response.jsonp(error);
	});
	
	if(method == 'POST'){
		req.write(post_data);
	}
	req.end();
};

exports.load 		= load;