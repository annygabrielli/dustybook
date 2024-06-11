require('dotenv').config();

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const routes = require('./src/routes');
const cors = require('cors');

// Middleware to allow CORS requests from the client side. The origin is set to the client's URL and the methods are set to GET, PUT, POST, DELETE, PATCH.
var corsOptions = {
  origin: ['http://localhost:3000','https://dustbook.web.app'],
  optionsSuccessStatus: 200,
  methods: "GET, PUT, POST, DELETE, PATCH"
}

// Middleware to parse the request body and convert it to JSON.
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

// Error handling middleware function to catch all errors and send a response to the client with the error message or a generic message if the NODE_ENV is set to production.
app.use((err, req, res, next) => {
  if(process.env.NODE_ENV === 'production') {
      return res.status(500).send({ error: 'Internal server error' });
  }else {
      return res.status(500).send({ error: err.message });
  }
});

// Start the server on the specified port.
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})