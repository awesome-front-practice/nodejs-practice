const ev = require('events');

let eventEmitter = new ev.EventEmitter();
eventEmitter.on('scream', args => console.log('heard a scream'));

eventEmitter.emit('scream');