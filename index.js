const express = require('express');
var cors = require('cors');
const app = express();
const { MongoClient } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
	res.send(' Start programing hero projects');
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
})