/**
 * PressureController
 *
 * @description :: Server-side logic for managing pressures
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var json2csv = require('json2csv');
var moment = require('moment');
module.exports = {

	getLatestValue1: function (req, res) {
    	Pressure.find({sort: 'createdAt DESC'}).where({number: 1}).limit(1).exec(function findCB(err, found){
    		if (err) console.log (err, err.stack);
    		else if (typeof found[0] === "undefined") console.log ("Pressure table empty");
			else {
				res.json(found[0].value);
			}
		});
    },

    getLatestValue2: function (req, res) {
    	Pressure.find({sort: 'createdAt DESC'}).where({number: 2}).limit(1).exec(function findCB(err, found){
    		if (err) console.log (err, err.stack);
    		else if (typeof found[0] === "undefined") console.log ("Pressure table empty");
			else {
				res.json(found[0].value);
			}
		});
    },

    getLatestValue3: function (req, res) {
    	Pressure.find({sort: 'createdAt DESC'}).where({number: 3}).limit(1).exec(function findCB(err, found){
    		if (err) console.log (err, err.stack);
    		else if (typeof found[0] === "undefined") console.log ("Pressure table empty");
			else {
				res.json(found[0].value);
			}
		});
    },

    csv: function (req, res) {
	    Pressure.find({}).exec(function findCB(err, found){
	    	var config = {
	      		fields : ['number','value','run', 'createdAt'],
	      		data: found
	      	} 

	      	json2csv(config, function(err, csv) {
	      		if (err) console.log(err);
	      		var filename = "pressure-" + moment().format("YYYY-MM-DD") + ".csv";
	      		res.attachment(filename);
	      		res.end(csv, 'UTF-8');
	    	});
	    }); 
    }


   
	
};