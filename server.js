require('dotenv').config();
const express = require('express');
const app = express();
const connectToDB = require('./src/config/db');



connectToDB();

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
