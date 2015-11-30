/**
 * YawController
 *
 * @description :: Server-side logic for managing yaws
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    getLatestValue: function (req, res) {
    	Yaw.find({sort: 'createdAt DESC'}).limit(1).exec(function findCB(err, found){
    		if (err) console.log (err, err.stack);
			else {
				res.json(found[0].value);
			}
		});
    }
	
};

