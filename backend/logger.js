const EventEmitter = require('events');

let url = 'http://localhost:3000'

class Logger extends EventEmitter {
  log(message){
    //Send an HTTP request
    console.log(message);

    // raise an event
    this.emit('messageLogged', {id: 1, url: 'http://'})
  }
}


module.exports = Logger;
