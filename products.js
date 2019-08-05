function ProductsController() {
	
	var that = this;
	that.store = [];

	var findProductById = function(req) {
		var found = that.store.filter(function (p) {
			return p.id === parseInt(req.params.id);
		});
		if (found && found.length > 0) {
			return found[0];
		}
		return null;
	}

	that.get = function(req, res, next) {
		res.send(200, that.store);
		return next();
	};

	that.getById = function(req, res, next) {
		var found = findProductById(req);
		if (found) {
			res.send(200, found);
		} else {
			console.log("Product not found!");
			res.send(404, "Product not found!");
		}
		return next();
	};

	that.post = function(req, res, next) {
		if (req.body.hasOwnProperty('id') && req.body.hasOwnProperty('name')) {
			that.store.push({
				id: parseInt(req.body.id),
				name: req.body.name
			});
			res.send(201);
		} else {
			console.log("Invalid POST request!");
			res.send(500);
		}
		return next();
	};

	that.put = function(req, res, next) {
		if (!req.body.hasOwnProperty('name')) {
			console.log(`Invalid request. Product 'name' missing!`);
			res.send(500);
		} else {
			var found = findProductById(req);
			if (found) {
				found.name = req.body.name;
				res.send(201, found);
			} else {
				var product = {
					id: parseInt(req.params.id),
					name: req.body.name
				};
				that.store.push(product);
				res.send(201, product);
			}
		}
		return next();
	};

	that.del = function(req, res, next) {		
		that.store = that.store.filter(function(p) {
			return p.id !== parseInt(req.params.id);
		});
		res.send(200);
		return next();
	};

};

// Export the functions to be imported in the server
module.exports = new ProductsController();