request = require('request-json');
var client = request.createClient('http://localhost:1337/');
 
for (i = 0; i < 20; i++) { 
	var data = {
	  name: 'yaw',
	  time: Date.now().toString(),
	  value: Math.random().toString(),
	  run: '1'
	};
	client.post('test/', data, function(err, res, body) {
	  return console.log(res.statusCode);
	});
}