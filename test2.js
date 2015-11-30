request = require('request-json');
var client = request.createClient('http://localhost:1337/');




client.get('yaw/getLatestValue', function(err, res) {
	console.log(res.body);
});


