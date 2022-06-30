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
async function run() {
	try {
		await client.connect();
		const userCollection = client.db("All-bills").collection("bill");
		const bill = {
			name: "abc", 
			email: "myname@gmail.com", 
			mobile: " 9345454"
		}
		const result = await userCollection.insertOne(bill);
		console.log(`A document was inserted with the _id: ${result.insertedId}`);
	}
	finally {

	}
}
run().catch(console.dir);

app.get('/', (req, res) => {
	res.send(' Start programing hero projects');
})

app.listen(port, () => {
	console.log(`listening on port ${port}`);
})