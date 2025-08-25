const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/team3db";
    console.log("Attempting to connect to MongoDB at:", mongoURI);
    
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB Connected to Team-3 Database");

    // Drop all collections
    console.log("Cleaning up database...");
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
      try {
        await collection.dropIndexes();
        await collection.drop();
      } catch (err) {
        console.log(`No collection to drop or already dropped: ${collection.collectionName}`);
      }
    }
    console.log("Database cleanup complete");
    
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    console.error("Full error stack:", error.stack);
    process.exit(1);
  }
};

module.exports = connectDB;