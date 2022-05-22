const events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter.on('customEvent', (planet, satellite) => console.log(`Planet ${planet} and satellite ${satellite}`));

eventEmitter.emit('customEvent', 'Earth', 'Moon');