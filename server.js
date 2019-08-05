var restify = require('restify'),
	products = require('./products'),
	port = process.env.PORT || 3000;

// Configuring a restify server
var server = restify.createServer({
	name: "Test Restify Server"
});

// Adding middleware to the server
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
server.listen(port, function(){
	console.log('API Running at - ' + port);
});