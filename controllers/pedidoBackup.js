
/*
 * GET users listing.
 */

/**
 * Private Attributes
 * */
var sequelize		= require ("../app").get("sequelize");
var pedido			= sequelize.import("../models/pedidos");

/** 
 * Private Functions 
 * */
var all 			= function(request, response){
	maquinaestado.findAll().then(function(pedido){
		response.jsonp(pedido);
	});
};
var findById 		= function(request, response){
	pedido.hasMany(pedidodetalle, { foreignKey: 'pedidoid' });
	pedidodetalle.hasOne(pedido, { foreignKey: 'pedidoid' });
	
	pedido.hasOne(maquinaestado, { foreignKey : 'maquinaestadoid' });
	maquinaestado.hasMany(pedido, { foreignKey : 'maquinaestadoid' });
	
	
	pedido.findAll({
		include : [ 
		   { model : pedidodetalle },
		   { model : maquinaestado }
		],
		where : {
			pedidosid : {
				$in : [request.params.pedidoid]
			}
		}
	}).then(function(pedido){
		response.jsonp(pedido);
	});
	
};
var create 			= function(request, response){
	response.jsonp({response : "This is create function from resource pedido MICHAEL"});
};

/**
 * Export functions
 * 
 */
exports.all 		= all;
exports.findById 	= findById;
exports.create 		= create;