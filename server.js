 const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');

const items = require('./routes/api/items.js');

const app = express();
 
// bodyParser middleware
app.use(bodyParser.json());

// db config
const db = require('./config/keys.js').mongoURI;

// connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('mongodb connected...'))
  .catch(error => console.log(error));

// use ports  
app.use('/api/items', items);

// server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/built'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port =  process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
