var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

var connectHandler = function connectHandler() {
	console.log("in connectHandler");
	// Fire the data_received event 
   eventEmitter.emit('data_received');
}
// Bind event and even handler as follows
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

// Fire an event 
eventEmitter.emit('connection');

console.log('Program Ended');