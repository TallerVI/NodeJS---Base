/**
 * New node file
 */
var appFastplate = require("../app");
var estado = require("../controllers/estado");

appFastplate.get('/estado', estado.all);
appFastplate.get('/estado/:estadoid', estado.findById);
appFastplate.post('/estado', estado.create);