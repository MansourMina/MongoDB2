require('./db/connect');
require('colors');
const { Dog } = require('./model/schemas.js');
const dogs = require('./dogs');

(async () => {
  try {
    const dog = Dog.create(dogs);
    await Promise.all([dog]);
    console.log('Data loaded');
  } catch (error) {
    console.error(`Error => ${error.message.red}`);
  } finally {
    process.exit('SIGINT');
  }
})();

// (async () => {
//   try {
//     const p1 = Dog.create({ name: 'Bello', born: '2020-12-01' });
//     const p2 = Dog.create({ name: 'Beisser', born: '2020-12-02' });
//     await Promise.all([p1, p2]);
//     console.log('Data loaded');
//   } catch (error) {
//     console.error(`Error => ${error.message.red}`);
//   } finally {
//     process.exit('SIGINT');
//   }
// })();
