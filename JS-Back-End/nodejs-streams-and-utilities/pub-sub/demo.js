const eventBus = require('./eventBus.js')

let unsubscribe = eventBus.subscribe('planetEvent', (planet) => console.log(`Yeaa on planet ${planet}`));

eventBus.subscribe('doubleEvent', (planet, planet2) => console.log(`Yeaa on planet ${planet} and ${planet2}`));
eventBus.subscribe('wowEvent', () => console.log('Wowwwwwwwww'));

eventBus.publish('planetEvent', 'Earth');
unsubscribe();

eventBus.publish('wowEvent');
eventBus.publish('doubleEvent', 'Mars', 'Venera');

eventBus.publish('planetEvent', 'Jypiter');