
/*
 * GET users listing.
 */

/**
 * Private Attributes
 * */
var serverrequest	= require ("./serverrequest");
/** 
 * Private Functions 
 * */
var all 			= function(request, response){
	serverrequest.load("", "/historialprecio", "", "5000", "GET", request, response);
};
var findById 		= function(request, response){
	serverrequest.load("", "/historialprecio", request.params.historialprecioid, "5000", "GET", request, response);
};
var create 			= function(request, response){
	serverrequest.load("", "/historialprecio", request.body, "5000", "POST", request, response);
};

/**
 * Export functions
 * 
 */
exports.all 		= all;
exports.findById 	= findById;
exports.create 		= create;