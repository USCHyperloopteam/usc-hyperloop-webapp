/**
 * HomeController
 *
 * @description :: Incoming central module for 
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var $ = require('jquery');
var csv = require('csv');
var fs = require('fs');
var qs = require('querystring');




/* temporary hashing out of parsing using csv parser
//OPT1
in = fs.createReadStream('./in')
out = fs.createWriteStream('./out')
in.pipe(csv()).pipe(out)


//OPT2
var csv = require('csv');
var fs = require('fs');
csv()
.from.stream(fs.createReadStream(__dirname+'/sample.in'))
.to.path(__dirname+'/sample.out')
.transform( function(row){
  row.unshift(row.pop());
  return row;
})
.on('record', function(row,index){
  console.log('#'+index+' '+JSON.stringify(row));
})
.on('end', function(count){
  console.log('Number of lines: '+count);
})
.on('error', function(error){
  console.log(error.message);
});
// #0 ["2000-01-01","20322051544","1979.0","8.8017226E7","ABC","45"]
// #1 ["2050-11-27","28392898392","1974.0","8.8392926E7","DEF","23"]
// Number of lines: 2
*/

var HomeController = {

	// This will be used when receiving file names with data from pod
	// POST requests
	// Based on filename, route to correct function for processing.
	input: function (req, res) {
		switch (req.body.name)
		{
			case "velocity":
				return HomeController.velocityInput(req, res);

			case "pitch":
				return HomeController.pitchInput(req, res);

			case "yaw":
				return HomeController.yawInput(req, res);

			case "roll":
				return HomeController.rollInput(req, res);

			case "position":
				return HomeController.positionInput(req, res);

			case "power":
				return HomeController.powerInput(req, res);

			case "wifi":
				return HomeController.wifiInput(req, res);

			case "battery":
				return HomeController.batteryInput(req, res);

			case "load":
				return HomeController.loadInput(req, res);

			case "pressure":
				return HomeController.pressureInput(req, res);

			case "temperature":
				return HomeController.temperatureInput(req, res);

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
	velocityInput: function(req, res) {
		var item = {
    		"x": {"N":req.body.x},
    		"y": {"N":req.body.y},
    		"z": {"N":req.body.z},
    		"run": {"N":req.body.run}
		}		
		Velocity.create(req.params.all(), function velocityAdded (err, velocity) {
			if (err) console.log (err, err.stack);
			else res.json(velocity)
		});
		console.log("success");
	},

	// Grab speed data out of filetype (tentatively csv) and send to GUI as well as store in DB
	// Use AJAX to post request to DB so we don't lose data if data streams in too quickly.
	// Order of data will be post-sorted later. For now all that matters is all data makes it into DB
	pitchInput: function(req, res, next) {
		var item = {
    		"value": {"N":parseFloat(req.body.value)},
    		"run": {"N":parseInt(req.body.run)}
		}
		Pitch.create(req.params.all(), function pitchAdded (err, pitch) {
			if (err) console.log (err, err.stack);
			else res.json(pitch)
		});
		console.log("success");
	},

	// Grab speed data out of filetype (tentatively csv) and send to GUI as well as store in DB
	// Use AJAX to post request to DB so we don't lose data if data streams in too quickly.
	// Order of data will be post-sorted later. For now all that matters is all data makes it into DB
	yawInput: function(req, res, next) {
		var item = {
    		"value": {"N":parseFloat(req.body.value)},
    		"run": {"N":parseInt(req.body.run)}
		}
		Yaw.create(req.params.all(), function yawAdded (err, yaw) {
			if (err) console.log (err, err.stack);
			else res.json(yaw)
		});
		console.log("success");
	},

	// Grab speed data out of filetype (tentatively csv) and send to GUI as well as store in DB
	// Use AJAX to post request to DB so we don't lose data if data streams in too quickly.
	// Order of data will be post-sorted later. For now all that matters is all data makes it into DB
	rollInput: function(req, res, next) {
		var item = {
    		"value": {"N":parseFloat(req.body.value)},
    		"run": {"N":parseInt(req.body.run)}
		}
		Roll.create(req.params.all(), function rollAdded (err, roll) {
			if (err) console.log (err, err.stack);
			else res.json(roll)
		});
		console.log("success");
	},

	// Grab speed data out of filetype (tentatively csv) and send to GUI as well as store in DB
	// Use AJAX to post request to DB so we don't lose data if data streams in too quickly.
	// Order of data will be post-sorted later. For now all that matters is all data makes it into DB
	positionInput: function(req, res) {
		var item = {
    		"x": {"N":req.body.x},
    		"y": {"N":req.body.y},
    		"z": {"N":req.body.z},
    		"run": {"N":req.body.run}
		}		
		Position.create(req.params.all(), function positionAdded (err, position) {
			if (err) console.log (err, err.stack);
			else res.json(position)
		});
		console.log("success");
	},

	powerInput: function(req, res, next) {
		var item = {
    		"value": {"N":parseFloat(req.body.value)},
    		"run": {"N":parseInt(req.body.run)}
		}
		Power.create(req.params.all(), function powerAdded (err, power) {
			if (err) console.log (err, err.stack);
			else res.json(power)
		});
		console.log("success");
	},

	wifiInput: function(req, res, next) {
		var item = {
    		"value": {"N":parseFloat(req.body.value)},
    		"run": {"N":parseInt(req.body.run)}
		}
		Wifi.create(req.params.all(), function wifiAdded (err, wifi) {
			if (err) console.log (err, err.stack);
			else res.json(wifi)
		});
		console.log("success");
	},

	batteryInput: function(req, res, next) {
		var item = {
    		"value": {"N":parseFloat(req.body.value)},
    		"run": {"N":parseInt(req.body.run)}
		}
		Battery.create(req.params.all(), function batteryAdded (err, battery) {
			if (err) console.log (err, err.stack);
			else res.json(battery)
		});
		console.log("success");
	},

	loadInput: function(req, res, next) {
		var item = {
    		"value": {"N":parseFloat(req.body.value)},
    		"number": {"N":parseFloat(req.body.number)},
    		"run": {"N":parseInt(req.body.run)}
		}
		Load.create(req.params.all(), function loadAdded (err, load) {
			if (err) console.log (err, err.stack);
			else res.json(load)
		});
		console.log("success");
	},

	pressureInput: function(req, res, next) {
		var item = {
    		"value": {"N":parseFloat(req.body.value)},
    		"number": {"N":parseFloat(req.body.number)},
    		"run": {"N":parseInt(req.body.run)}
		}
		Pressure.create(req.params.all(), function pressureAdded (err, pressure) {
			if (err) console.log (err, err.stack);
			else res.json(pressure)
		});
		console.log("success");
	},

	temperatureInput: function(req, res, next) {
		var item = {
    		"value": {"N":parseFloat(req.body.value)},
    		"type": {"S":parseFloat(req.body.type)},
    		"run": {"N":parseInt(req.body.run)}
		}
		Temperature.create(req.params.all(), function temperatureAdded (err, temperature) {
			if (err) console.log (err, err.stack);
			else res.json(temperature)
		});
		console.log("success");
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

	},

};


module.exports = HomeController;
