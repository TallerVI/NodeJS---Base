
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
	serverrequest.load("", "/mesa", "", "4000", "GET", request, response);
};
var findById 		= function(request, response){
	serverrequest.load("", "/mesa", request.params.mesaid, "4000", "GET", request, response);
};
var create 			= function(request, response){
	serverrequest.load("", "/mesa", request.body, "4000", "POST", request, response);
};

/**
 * Export functions
 * 
 */
exports.all 		= all;
exports.findById 	= findById;
exports.create 		= create;