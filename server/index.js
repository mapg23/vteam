"use strict";
const port    = 1338;
const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("<h1>Hello from server</h1>");
});

app.listen(port, function() {
    console.log(`Server started at port: ${port}`);
}); 