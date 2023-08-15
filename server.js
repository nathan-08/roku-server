require('dotenv').config();
const fs = require('fs');
const express = require('express');
const PORT = process.env.PORT;
const auth = require('./auth');

const data = JSON.parse(fs.readFileSync('../mockdata.json'));
console.log(`checkin time: ${data.checkin_time}`);

const app = express();
// require password to access server
app.use(auth);

// Useful to ensure server is running
app.get('/health', (req,res) => {
	res.send('OK');
});

// Storing data on HDD
app.get('/write', (req,res) => {
	const data = {
		"message": "placeholder data"
	};
	fs.writeFile("data.json", JSON.stringify(data), err => {
		if (err) throw err;
	});
	res.send();
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
