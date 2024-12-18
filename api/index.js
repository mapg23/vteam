"use strict";
const port    = 1339;
const express = require("express");
const app     = express();

// Add a route for the path /
app.get("/", (req, res) => {
    res.send("<h1>API</h1>")
});


app.listen(port, function() {
    console.log(`API started at port: ${port}`)
}); 