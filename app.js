/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require("fs");

var appFastplate = module.exports = express();

// all environments
appFastplate.set('http', http);
appFastplate.set('port', process.env.PORT || 3000);
appFastplate.use(express.favicon());
appFastplate.use(express.logger('dev'));
appFastplate.use(express.bodyParser());
appFastplate.use(express.methodOverride());
appFastplate.use(appFastplate.router);
appFastplate.use((error,request,response,next) => {
  if(error){
    response.jsonp(error);
  }
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Credentials', true);
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATH');
  next();
});

appFastplate.get("/", function(request, response){
  response.jsonp({ response : "HOLA mUNDO "});
});

/*
// development only
if ('development' == appFastplate.get('env')) {
	appFastplate.use(express.errorHandler());
}

http.createServer(appFastplate).listen(appFastplate.get('port'), () => {
  console.log('Express server listening on port ' + appFastplate.get('port'));
});
*/

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
 
http.createServer(appFastplate).listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
});