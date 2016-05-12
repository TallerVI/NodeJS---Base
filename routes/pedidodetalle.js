/**
 * New node file
 */
var appFastplate = require("../app");
var pedidodetalle = require("../controllers/pedidodetalle");

appFastplate.get('/pedidodetalle', pedidodetalle.all);
appFastplate.get('/pedidodetalle/:pedidodetalleid', pedidodetalle.findById);
appFastplate.post('/pedidodetalle', pedidodetalle.create);