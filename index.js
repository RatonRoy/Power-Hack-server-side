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


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@programming-hero.cx72s.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
	try {
		await client.connect();
		const userCollection = client.db("All-bills").collection("bill");
		
		app.post('/api/add-billing', async (req, res) => {
			const bill = req.body;
			const result = await userCollection.insertOne(bill);
			res.send(result);
		})
		app.get('/api/billing-list', async (req, res) => {
			const query = {};
			const cursor = userCollection.find(query);
			const bills = await cursor.toArray();
			res.send(bills);
		});
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