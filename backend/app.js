
const EventEmitter = require('events');

const emitter = new EventEmitter()

// register a listener
emitter.on('messageLogged', function(){
  console.log('Lisener called');
})

// raise an event
emitter.emit('messageLogged')
