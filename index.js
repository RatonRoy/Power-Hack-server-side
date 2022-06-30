const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const { ObjectID } = require('bson');
const ObjectId = require('mongodb').ObjectId;

const app = express();
const port = process.env.PORT || 5000;
// username : powerHack
// password : ywpGEKkI0MIBl5VS

// use middleware 
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://powerHack:ywpGEKkI0MIBl5VS@programming-hero.cx72s.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
	console.log('db connected ');
  client.close();
});


app.get('/', (req, res) => {
	res.send(' Start programing hero projects');
})

app.listen(port, () => {
	console.log(`listening on port ${port}`);
})