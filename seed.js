const { db, Puppy, Kitten } = require('./server/db');

const seed = async () => {
  await db.sync();
  await Puppy.create({ name: 'George' });
  await Puppy.create({ name: 'Harry' });
  await Puppy.create({ name: 'Cookie' });

  await Kitten.create({ name: 'Bella' });
  await Kitten.create({ name: 'Nova' });
  await Kitten.create({ name: 'Trout' });

  db.close();
  console.log(`
    Seeding successful!
    Time to blog!
  `);
};

seed()