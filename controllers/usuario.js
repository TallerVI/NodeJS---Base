
/*
 * GET users listing.
 */

/** RUBEN
 * Private Attributes
 * */
var serverrequest	= require ("./serverrequest");

/** 
 * Private Functions 
 * */
var all 			= function(request, response){
	serverrequest.load("", "/usuario", "", "5000", "GET", request, response);
};
var findById 		= function(request, response){
	serverrequest.load("", "/usuario", request.params.usuarioid, "500", "GET", request, response);
};
var create 			= function(request, response){
	serverrequest.load("", "/usuario", request.body, "5000", "POST", request, response);
};

/**
 * Export functions
 * 
 */
exports.all 		= all;
exports.findById 	= findById;
exports.create 		= create;