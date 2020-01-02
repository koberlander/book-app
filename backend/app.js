
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger()

// Register a listener
logger.on('messageLogged', (arg) => {
  console.log('Lisener called', arg);
})

logger.log('message')
