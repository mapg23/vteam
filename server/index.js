"use strict";
const port    = 1338;
const express = require('express');
const path = require('path');
const app = express();

const customer_route = require("./routes/customer_route.js");
const admin_route = require("./routes/admin_route.js");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/customer", customer_route);
app.use("/admin", admin_route);

app.get("/", (req, res) => {
    // res.redirect("/customer");
    res.send("<h1>Rebuilt</h1>")
});

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
}); 