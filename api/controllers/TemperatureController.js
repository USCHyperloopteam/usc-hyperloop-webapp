/**
 * TemperatureController
 *
 * @description :: Server-side logic for managing temperatures
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var json2csv = require('json2csv');
var moment = require('moment');
module.exports = {

	getLatestValueInside: function (req, res) {
    	Temperature.find({sort: 'createdAt DESC'}).where({type: 'inside'}).limit(1).exec(function findCB(err, found){
    		if (err) console.log (err, err.stack);
    		else if (typeof found[0] === "undefined") console.log ("Temperature table empty");
			else {
				res.json(found[0].value);
			}
		});
    },

    getLatestValueOutside: function (req, res) {
    	Temperature.find({sort: 'createdAt DESC'}).where({type: 'outside'}).limit(1).exec(function findCB(err, found){
    		if (err) console.log (err, err.stack);
    		else if (typeof found[0] === "undefined") console.log ("Temperature table empty");
			else {
				res.json(found[0].value);
			}
		});
    },

    csv: function (req, res) {
	    Temperature.find({}).exec(function findCB(err, found){
	    	var config = {
	      		fields : ['type','value','run', 'createdAt'],
	      		data: found
	      	} 

	      	json2csv(config, function(err, csv) {
	      		if (err) console.log(err);
	      		var filename = "temperature-" + moment().format("YYYY-MM-DD") + ".csv";
	      		res.attachment(filename);
	      		res.end(csv, 'UTF-8');
	    	});
	    }); 
    }

    

   
	
};