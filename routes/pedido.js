/**
 * New node file
 */
var appFastplate = require("../app");
var pedido = require("../controllers/pedido");

appFastplate.get('/pedido', pedido.all);
appFastplate.get('/pedido/:pedidoid', pedido.findById);
appFastplate.post('/pedido', pedido.create);