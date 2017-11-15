var path = require('path');

module.exports = function(app) {
	// console.log('___ENTER htmlRoutes.js___');

	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../views/index.html'));
	});

	app.get('/contact', function(req, res) {
		res.sendFile(path.join(__dirname, '../views/contact.html'));
	});

	app.get('/portfolio', function(req, res) {
		res.sendFile(path.join(__dirname, '../views/portfolio.html'));
	});
};