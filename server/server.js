const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');
const AWS = require('aws-sdk');

// const seedDB = require('./routes/api/util/scripts/seed-database');
// const changeBrotherInformation = require('./routes/api/util/scripts/change-brother-info');
const addEpsilon = require('./routes/api/util/scripts/add-epsilon');
const removeDelta = require('./routes/api/util/scripts/reset-delta');
const updatePos = require('./routes/api/util/scripts/update-pos');
// Allows requests from diff origins
app.use(cors());

// Middleware for parsing form inputs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set configuration for AWS
AWS.config.loadFromPath('./config/secrets.json');

// Serving all routes under prefix 'localhost:5000/api/*'
const routes = require('./routes/api');
app.use('/api', routes);

/**
 * Connect to MongoDB:
 * - If running development environment, use MongoDB Atlas
 * - If running production, spin up MongoDB base docker image
 *  */
const { MongoURI } = JSON.parse(fs.readFileSync('./config/secrets.json'));
switch (process.env.NODE_ENV) {
  case 'development':
    mongoose
      .connect(MongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => console.log('Development mode: Connected to MongoDB Atlas'))
      .catch((error) => {
        throw new Error(error);
      });
    // seedDB();
    // changeBrotherInformation();
    removeDelta();
    //addEpsilon();
    updatePos();
    break;
  case 'production':
    mongoose
      .connect('mongodb://mongodb-container:27017/sjsu-tt-database', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() =>
        console.log('Production mode: Connected to MongoDB container')
      )
      .catch((error) => {
        throw new Error(error);
      });
    // seedDB();
    // changeBrotherInformation();
    break;
  default:
    console.error('NODE_ENV not specified');
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
  if (error) {
    throw new Error(error);
  }
  console.log(`Server started on port ${PORT}`);
});
