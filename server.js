// Using in class restaurant activity as a starter file
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3005;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));


//allows express to use router files:
require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

// Listener:
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
