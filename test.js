request = require('request-json');
var client = request.createClient('http://localhost:1337/');

var val1 = {
  	name: 'battery',
  	value: '96',
  	run: '1'
};

var val2 = {
  	name: 'wifi',
  	value: '86',
  	run: '1'
};

var val3 = {
  	name: 'power',
  	value: '89',
  	run: '1'
};

var val4 = {
  	name: 'load',
  	number: '1',
  	value: '151',
  	run: '1'
};

var val5 = {
  	name: 'load',
  	number: '2',
  	value: '152',
  	run: '1'
};

var val6 = {
  	name: 'load',
  	number: '3',
  	value: '153',
  	run: '1'
};

var val7 = {
  	name: 'load',
  	number: '4',
  	value: '154',
  	run: '1'
};

var val8 = {
  	name: 'load',
  	number: '5',
  	value: '155',
  	run: '1'
};

var val9 = {
  	name: 'load',
  	number: '6',
  	value: '156',
  	run: '1'
};

var val10 = {
  	name: 'temperature',
  	type: 'inside',
  	value: '71',
  	run: '1'
};

var val11 = {
  	name: 'temperature',
  	type: 'outside',
  	value: '93',
  	run: '1'
};

var val12 = {
  	name: 'pressure',
  	number: '1',
  	value: '271',
  	run: '1'
};

var val13 = {
  	name: 'pressure',
  	number: '2',
  	value: '272',
  	run: '1'
};

var val14 = {
  	name: 'pressure',
  	number: '3',
  	value: '273',
  	run: '1'
};

client.post('test/', val1, function(err, res, body) {
  		return console.log(res.statusCode);
});
client.post('test/', val2, function(err, res, body) {
  		return console.log(res.statusCode);
});
client.post('test/', val3, function(err, res, body) {
  		return console.log(res.statusCode);
});
client.post('test/', val4, function(err, res, body) {
  		return console.log(res.statusCode);
});
client.post('test/', val5, function(err, res, body) {
  		return console.log(res.statusCode);
});
client.post('test/', val6, function(err, res, body) {
  		return console.log(res.statusCode);
});
client.post('test/', val7, function(err, res, body) {
  		return console.log(res.statusCode);
});
client.post('test/', val8, function(err, res, body) {
  		return console.log(res.statusCode);
});
client.post('test/', val9, function(err, res, body) {
  		return console.log(res.statusCode);
});
client.post('test/', val10, function(err, res, body) {
  		return console.log(res.statusCode);
});
client.post('test/', val11, function(err, res, body) {
  		return console.log(res.statusCode);
});
client.post('test/', val12, function(err, res, body) {
  		return console.log(res.statusCode);
});
client.post('test/', val13, function(err, res, body) {
  		return console.log(res.statusCode);
});
client.post('test/', val14, function(err, res, body) {
  		return console.log(res.statusCode);
});






var i = 0;
setInterval(function() {
	var yaw = {
  		name: 'yaw',
  		value: Math.random().toString(),
  		run: '1'
	};
	var pitch = {
  		name: 'pitch',
  		value: Math.random().toString(),
  		run: '1'
	};
	var roll = {
  		name: 'roll',
  		value: Math.random().toString(),
  		run: '1'
	};
	var velocity = {
  		name: 'velocity',
  		x: Math.random().toString(),
  		y: Math.random().toString(),
  		z: Math.random().toString(),
  		run: '1'
	};
	var position = {
  		name: 'position',
  		x: Math.random().toString(),
  		y: Math.random().toString(),
  		z: Math.random().toString(),
  		run: '1'
	};
	client.post('test/', yaw, function(err, res, body) {
  		return console.log(res.statusCode);
	});
	client.post('test/', pitch, function(err, res, body) {
  		return console.log(res.statusCode);
	});
	client.post('test/', roll, function(err, res, body) {
  		return console.log(res.statusCode);
	});
	client.post('test/', velocity, function(err, res, body) {
  		return console.log(res.statusCode);
	});
	client.post('test/', position, function(err, res, body) {
  		return console.log(res.statusCode);
	});

	console.log(i);
	i++;


}, 500);




