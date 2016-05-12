
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
	serverrequest.load("", "/tipoarticulo", "", "4000", "GET", request, response);
};
var findById 		= function(request, response){
	serverrequest.load("", "/tipoarticulo", request.params.tipoarticuloid, "4000", "GET", request, response);
};
var create 			= function(request, response){
	serverrequest.load("", "/tipoarticulo", request.body, "4000", "POST", request, response);
};

/**
 * Export functions
 * 
 */
exports.all 		= all;
exports.findById 	= findById;
exports.create 		= create;