const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');

app.use(express.static(__dirname + '/public'));
app.listen(8080);

const port = 443;

// Read the SSL certificate and private key
const options = {
  key: fs.readFileSync('../../ssl/private_key.pem'),
  passphrase: 'rimke',
  cert: fs.readFileSync('../../ssl/certificate.pem')
};

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is a secure server!');
});

// Create an HTTPS server with Express
const server = https.createServer(options, app);

// Start the server
server.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
