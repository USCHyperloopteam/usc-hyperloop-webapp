/**
 * BatteryController
 *
 * @description :: Server-side logic for managing Batteries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var json2csv = require('json2csv');
var moment = require('moment');
module.exports = {

	getLatestValue: function (req, res) {
    	Battery.find({sort: 'createdAt DESC'}).limit(1).exec(function findCB(err, found){
    		if (err) console.log (err, err.stack);
    		else if (typeof found[0] === "undefined") console.log ("Battery table empty");
			else {
				res.json(found[0].value);
			}
		});
    },

    csv: function (req, res) {
	    Battery.find({}).exec(function findCB(err, found){
	    	var config = {
	      		fields : ['value','run', 'createdAt'],
	      		data: found
	      	} 

	      	json2csv(config, function(err, csv) {
	      		if (err) console.log(err);
	      		var filename = "battery-" + moment().format("YYYY-MM-DD") + ".csv";
	      		res.attachment(filename);
	      		res.end(csv, 'UTF-8');
	    	});
	    }); 
    }
	
};