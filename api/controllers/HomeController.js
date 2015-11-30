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
			case "speed-info.csv":
				return HomeController.speedInput(req, res);

			case "pitch":
				return HomeController.pitchInput(req, res);

			case "yaw":
				return HomeController.yawInput(req, res);

			case "roll":
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
		var item = {
    		"value": {"N":req.body.value},
    		"run": {"N":req.body.run}
		}		
		db.putItem({TableName: 'speed-info', Item: item}, function(err,data) {
			if (err) console.log (err, err.stack);
			else 	 res.send(200);
		});

	},

	// Grab speed data out of filetype (tentatively csv) and send to GUI as well as store in DB
	// Use AJAX to post request to DB so we don't lose data if data streams in too quickly.
	// Order of data will be post-sorted later. For now all that matters is all data makes it into DB
	pitchInput: function(req, res, next) {
		var item = {
    		"value": {"N":parseFloat(req.body.value)},
    		"run": {"N":parseInt(req.body.run)}
		}
		Pitch.create(req.params.all(), function yawAdded (err, pitch) {
			if (err) console.log (err, err.stack);
			else res.json(pitch)
		});
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
		Roll.create(req.params.all(), function yawAdded (err, roll) {
			if (err) console.log (err, err.stack);
			else res.json(roll)
		});
		console.log("success");
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

	},

	/*display: function(req, res) {

		// Nested Queries
		Yaw.find({}).exec( function findCB(err, yaw) {
	    	var data = {};
	        if (err) {
	        	data.yaw = { value: -1 }
	            return console.log('Error finding Yaw Model');
	        }
	        else {
	            data.yaw = yaw[yaw.length - 1];
	        }

	        Pitch.find({}).exec( function findCB(err, pitch) {
		        if (err) {
		        	data.pitch = { value: -1 }
		            return console.log('Error finding Pitch Model');
		        }
		        else {
		            data.pitch = pitch[pitch.length - 1];
		        }

		        Roll.find({}).exec( function findCB(err, roll) {
			        if (err) {
			        	data.roll = { value: -1 }
			            return console.log('Error finding Roll Model');
			        }
			        else {
			            data.roll = roll[roll.length - 1];
			        }

			        Battery.find({}).exec( function findCB(err, batt) {
			    	
				        if (err) {
				        	data.batt = { value: -1 }
				            return console.log('Error finding Battery Model');
				        }
				        else {
				            data.battery = batt[batt.length - 1];
				        }

				        Wifi.find({}).exec( function findCB(err, wifi) {
			    	
					        if (err) {
					        	data.wifi = { value: -1 }
					            return console.log('Error finding Wifi Model');
					        }
					        else {
					            data.wifi = wifi[wifi.length - 1];
					        }

					        Power.find({}).exec( function findCB(err, power) {
			    	
						        if (err) {
						        	data.power = { value: -1 }
						            return console.log('Error finding Power Model');
						        }
						        else {
						            data.power = power[power.length - 1];
						        }

						        Velocity.find({}).exec( function findCB(err, velocity) {
			    	
							        if (err) {
							        	data.velocity = { x: -1, y: -1, z: -1 }
							            return console.log('Error finding Velocity Model');
							        }
							        else {
							            data.velocity = velocity[velocity.length - 1];
							        }

							    	Position.find({}).exec( function findCB(err, position) {
			    	
								        if (err) {
								        	data.position = { x: -1, y: -1, z: -1 }
								            return console.log('Error finding Position Model');
								        }
								        else {
								            data.position = position[position.length - 1];
								        }

								       	return res.view ('live-data', {
									    	livedata: data
									    })
								    });
							    });
						    });
					    });
			        });
			    });
		    });
	    });
	}*/
};


module.exports = HomeController;
