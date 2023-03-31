const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017/mydb1'

// Create a new MongoClient
const client = new MongoClient(url);

// mongoClient.connect(url, function (error, db) {
// 	// body...
// 	if (error) throw error;
// 	console.log("Database Created!")
// 	db.close()
// })

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("test").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  } 
  // catch (error) {
  // 	throw new error;
  // }
}
run().catch(console.dir);