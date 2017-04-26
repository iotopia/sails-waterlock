/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	index: function(req, res) {
		res.ok({result: 'Test Index'});	
	},
	
	open: function(req, res) {
		res.ok(['This action is open']);
	},

	auth: function(req, res) {
		res.ok(['This action is authenticated']);
	},

	token: function(req, res) {
		res.ok(['You have a Json Web Token (jwt)']);
	}

};