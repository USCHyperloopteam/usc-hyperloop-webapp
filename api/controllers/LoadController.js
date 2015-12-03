/**
 * LoadController
 *
 * @description :: Server-side logic for managing loads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var json2csv = require('json2csv');
var moment = require('moment');
module.exports = {

	getLatestValue1: function (req, res) {
    	Load.find({sort: 'createdAt DESC'}).where({number: 1}).limit(1).exec(function findCB(err, found){
    		if (err) console.log (err, err.stack);
    		else if (typeof found[0] === "undefined") console.log ("Load table empty");
			else {
				res.json(found[0].value);
			}
		});
    },

    getLatestValue2: function (req, res) {
    	Load.find({sort: 'createdAt DESC'}).where({number: 2}).limit(1).exec(function findCB(err, found){
    		if (err) console.log (err, err.stack);
    		else if (typeof found[0] === "undefined") console.log ("Load table empty");
			else {
				res.json(found[0].value);
			}
		});
    },

    getLatestValue3: function (req, res) {
    	Load.find({sort: 'createdAt DESC'}).where({number: 3}).limit(1).exec(function findCB(err, found){
    		if (err) console.log (err, err.stack);
    		else if (typeof found[0] === "undefined") console.log ("Load table empty");
			else {
				res.json(found[0].value);
			}
		});
    },

    getLatestValue4: function (req, res) {
    	Load.find({sort: 'createdAt DESC'}).where({number: 4}).limit(1).exec(function findCB(err, found){
    		if (err) console.log (err, err.stack);
    		else if (typeof found[0] === "undefined") console.log ("Load table empty");
			else {
				res.json(found[0].value);
			}
		});
    },

    getLatestValue5: function (req, res) {
    	Load.find({sort: 'createdAt DESC'}).where({number: 5}).limit(1).exec(function findCB(err, found){
    		if (err) console.log (err, err.stack);
    		else if (typeof found[0] === "undefined") console.log ("Load table empty");
			else {
				res.json(found[0].value);
			}
		});
    },

    getLatestValue6: function (req, res) {
    	Load.find({sort: 'createdAt DESC'}).where({number: 6}).limit(1).exec(function findCB(err, found){
    		if (err) console.log (err, err.stack);
    		else if (typeof found[0] === "undefined") console.log ("Load table empty");
			else {
				res.json(found[0].value);
			}
		});
    },

    csv: function (req, res) {
        Load.find({}).exec(function findCB(err, found){
            var config = {
                fields : ['number','value','run', 'createdAt'],
                data: found
            } 

            json2csv(config, function(err, csv) {
                if (err) console.log(err);
                var filename = "load-" + moment().format("YYYY-MM-DD") + ".csv";
                res.attachment(filename);
                res.end(csv, 'UTF-8');
            });
        }); 
    }
	
};