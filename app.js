const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('THIS IS TEAM 11 WORKING FOR DEVOPS PROJECT...........What is new'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
