
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
	serverrequest.load("", "/pedido", "", "6000","GET", request, response);
};
var findById 		= function(request, response){
	serverrequest.load("", "/pedido", request.params.pedidoid, "6000", "GET", request, response);
};
var create 			= function(request, response){
	serverrequest.load("", "/pedido", request.body, "6000", "POST", request, response);
};

/**
 * Export functions
 * 
 */
exports.all 		= all;
exports.findById 	= findById;
exports.create 		= create;