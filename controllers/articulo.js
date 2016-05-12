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
	serverrequest.load("", "/articulo", "", "4000", "GET", request, response);
};
var findById 		= function(request, response){
	serverrequest.load("", "/articulo", request.params.articuloid, "4000", "GET", request, response);
};
var create 			= function(request, response){
	serverrequest.load("", "/articulo", request.body, "4000", "POST", request, response);
};

/**
 * Export functions
 * 
 */
exports.all 		= all;
exports.findById 	= findById;
exports.create 		= create;