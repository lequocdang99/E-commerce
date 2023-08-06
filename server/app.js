const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Connect to hotels database
mongoose
  .connect('mongodb://localhost/productsdb')
  .then(() => {
    console.log('Connected to product database');
  })
  .catch(() => console.error('Failed to connect to product database'));

//Routes handlers

//Port
app.listen(5000, () => console.log('Server listening on port 5000'));
