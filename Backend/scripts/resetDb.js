const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/team3db')
  .then(async () => {
    console.log('Connected to MongoDB');
    
    try {
      // Drop the entire database
      await mongoose.connection.db.dropDatabase();
      console.log('Dropped old database');
      
      // Drop all collections
      const collections = await mongoose.connection.db.collections();
      for (let collection of collections) {
        await collection.drop();
      }
      console.log('Dropped all collections');
      
      // Drop all indexes
      await mongoose.connection.db.collection('users').dropIndexes();
      console.log('Dropped all indexes');
      
      console.log('Database reset complete');
      process.exit(0);
    } catch (error) {
      console.error('Error:', error);
      process.exit(1);
    }
  })
  .catch(err => {
    console.error('Connection error:', err);
    process.exit(1);
  });
