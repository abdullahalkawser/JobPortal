const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(express.json()); // Add this middleware to parse JSON bodies
app.use(cors());

// MongoDB connection URI "mongodb+srv://jobportals71:Xm8azRsYr8lTLumJ@cluster0.jyfctqb.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb://localhost:27017"



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Async function to establish MongoDB connection
async function run() {
  try {
    // Connect the client to the MongoDB server
    await client.connect();

    const db = client.db('jobsDb');
    const createJobsCollection = db.collection('createJob');
    const appliJobsCollection = db.collection('JobsAplication');

    // post data client to database
    app.post('/applicationjob', async (req, res) => {
      try {
        const menus = req.body; 
        const menuItems = await appliJobsCollection.insertOne(menus);

        console.log(menuItems);
        res.json(menuItems);
      } catch (error) {
        console.error("Error inserting into MongoDB:", error);
        res.status(500).json({ error: "Failed to insert into MongoDB" });
      }
    });


    // get apesefic data from datbase


 
      app.get('/applicationjob', async (req, res) => {

        const email = req.query.email; // Extract email from query parameter
        const query = { email: email };
        const carts = await appliJobsCollection.find(query).toArray();
        res.json(carts);
      });


      // post job from cline side


      app.post('/careatejob', async (req, res) => {
        try {
          const menus = req.body; 
          const menuItems = await createJobsCollection.insertOne(menus);
  
          console.log(menuItems);
          res.json(menuItems);
        } catch (error) {
          console.error("Error inserting into MongoDB:", error);
          res.status(500).json({ error: "Failed to insert into MongoDB" });
        }
      });

      // get all jobs
      app.get('/alljobs', async (req, res) => {
        const carts = await createJobsCollection.find().toArray();
        res.json(carts);
      });









    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

// Call the run function to establish the connection
run();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the Express.js server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
