request = require('request-json');
var client = request.createClient('http://localhost:1337/');

// var i = 0;
// setInterval(function() {
// 	var val = {
//   		name: 'load',
//   		value: '150',
//   		number: '1',
//   		run: '1'
// 	};
	
// 	client.post('test/', val, function(err, res, body) {
//   		return console.log(res.statusCode);
// 	});
	
// 	i++;


// }, 500);


var val1 = {
  	name: 'temperature',
  	value: '72',
  	type: 'inside',
  	run: '1'
};
	
client.post('test/', val1, function(err, res, body) {
  		return console.log(res.statusCode);
});

var val2 = {
  	name: 'temperature',
  	value: '99',
  	type: 'outside',
  	run: '1'
};
	
client.post('test/', val2, function(err, res, body) {
  		return console.log(res.statusCode);
});



