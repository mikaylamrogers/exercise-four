const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// Routes Import
const indexRoute = require('./routes/index.js');

// Routes
app.use("/", indexRoute);

app.listen(port, () => 
    console.log(`Exercise Four is running at localhost:${port}`)
);
