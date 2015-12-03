/**
 * VelocityController
 *
 * @description :: Server-side logic for managing Velocities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var json2csv = require('json2csv');
var moment = require('moment');
module.exports = {

    getLatestValue: function (req, res) {
		Velocity.find({sort: 'createdAt DESC'}).limit(1).exec(function findCB(err, found){
    		if (err) console.log (err, err.stack);
    		else if (typeof found[0] === "undefined") console.log ("Velocity table empty");
			else {
				var jsonData = {
    				"x": found[0].x,
   					"y": found[0].y, 
   					"z": found[0].z
				}
				res.json(jsonData);
			}
		});
    },

    csv: function (req, res) {
	    Velocity.find({}).exec(function findCB(err, found){
	    	var config = {
	      		fields : ['x', 'y', 'z', 'run', 'createdAt'],
	      		data: found
	      	} 

	      	json2csv(config, function(err, csv) {
	      		if (err) console.log(err);
	      		var filename = "velocity-" + moment().format("YYYY-MM-DD") + ".csv";
	      		res.attachment(filename);
	      		res.end(csv, 'UTF-8');
	    	});
	    }); 
    }
	
};

