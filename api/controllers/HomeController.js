/**
 * HomeController
 *
 * @description :: Incoming central module for 
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var $ = jQuery = require('jquery');
require('./jquery.csv.js');

var HomeController = {

	// This will be used when receiving file names with data from pod
	// POST requests
	// Based on filename, route to correct function for processing.
	input: function (req, res) {
		
		switch (req.params.name)
		{
			case "speed-info.csv":
				return HomeController.speedInput(req, res);

			case "pitch-info.csv":
				return HomeController.pitchInput(req, res);

			case "yaw-info.csv":
				return HomeController.yawInput(req, res);

			case "roll-info.csv":
				return HomeController.rollInput(req, res);

			case "x-y-info.csv":
				return HomeController.xyInput(req, res);

			case "other-info.csv":
				return HomeController.otherInput(req, res);

			// Illegal request
			default:
				return res.redirect('404.ejs');

		}
	},

	// Grab speed data out of filetype (tentatively csv) and send to GUI as well as store in DB
	// Use AJAX to post request to DB so we don't lose data if data streams in too quickly.
	// Order of data will be post-sorted later. For now all that matters is all data makes it into DB
	speedInput: function(req, res) {
		var speedArray = $.csv.toObjects(req.params.name);
	},

	// Grab speed data out of filetype (tentatively csv) and send to GUI as well as store in DB
	// Use AJAX to post request to DB so we don't lose data if data streams in too quickly.
	// Order of data will be post-sorted later. For now all that matters is all data makes it into DB
	pitchInput: function(req, res) {
		var pitchArray = $.csv.toObjects(req.params.name);
	},

	// Grab speed data out of filetype (tentatively csv) and send to GUI as well as store in DB
	// Use AJAX to post request to DB so we don't lose data if data streams in too quickly.
	// Order of data will be post-sorted later. For now all that matters is all data makes it into DB
	yawInput: function(req, res) {
		var yawInput = $.csv.toObjects(req.params.name);
	},

	// Grab speed data out of filetype (tentatively csv) and send to GUI as well as store in DB
	// Use AJAX to post request to DB so we don't lose data if data streams in too quickly.
	// Order of data will be post-sorted later. For now all that matters is all data makes it into DB
	rollInput: function(req, res) {
		var rollInput = $.csv.toObjects(req.params.name)
	},

	// Grab speed data out of filetype (tentatively csv) and send to GUI as well as store in DB
	// Use AJAX to post request to DB so we don't lose data if data streams in too quickly.
	// Order of data will be post-sorted later. For now all that matters is all data makes it into DB
	xyInput: function(req, res) {
		var xyInput = $.csv.toObjects(req.params.name)
	},

	// Grab speed data out of filetype (tentatively csv) and send to GUI as well as store in DB
	// Use AJAX to post request to DB so we don't lose data if data streams in too quickly.
	// Order of data will be post-sorted later. For now all that matters is all data makes it into DB
	otherInput: function(req, res) {
		var otherInput = $.csv.toObjects(req.params.name)
	},


	// This will be used when requesting previously stored data from files
	// Left as stub as we have yet to figure out the specifics of our database's back-end implementation
	// GET requests
	// Based on datatype, return corresponding information
	output: function (req, res) {

	}

};


module.exports = HomeController;
