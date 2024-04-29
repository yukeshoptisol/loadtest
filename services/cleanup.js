const dotenv  = require('dotenv');
dotenv.config()

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
const dbName = process.env.DB;
console.log(uri, dbName);

exports.deleteRecordsByUser = async (userId) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection('documents');

    const result = await collection.deleteMany({ user: userId });
    console.log(`Deleted ${result.deletedCount} record(s) for user ${userId}`);
  } catch (error) {
    console.error('Error deleting records:', error);
  } finally {
    client.close();
  }
}

exports.deleteRecordsByUser('662e18bbbb832f16a79c03f2');
