var restify = require('restify'),
	corsMiddleware = require('restify-cors-middleware'),
	products = require('./products'),
	host = process.env.HOST || '127.0.0.1',
	port = process.env.PORT || 3000;

// Configuring a restify server
var server = restify.createServer({
	name: "Test Restify Server"
});

// Configuring cors for handling CORS issues
// const cors = corsMiddleware({
//     'origins': ['*']
// });
// server.pre(cors.preflight);
// server.use(cors.actual);

// Adding middleware and JSON handlers to the server
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(function(req, res, next) {
	console.log(req.method + ' ' + req.url);
	return next();
});

/* server.use() runs only when the route is found
 Use server.pre() to run middleware/handler for all routes
*/

// Creating the routes to be handled by Restify
server.get('/api/products', products.get);
server.get('/api/products/:id', products.getById);
server.post('/api/products', products.post);
server.put('/api/products/:id', products.put);
server.del('/api/products/:id', products.del);

/* Handling Exceptions and Errors
 For uncaught exceptions, server.uncaughtException()
 For errors, read the docs on restify-errors
*/

// Start the server
server.listen(port, host, function(){
	console.log('API Running at - ' + port);
	console.log(host);
	console.log(port);
});