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

app.listen(port, logStartUpDetailsToConsole);

app.get("/", (req, res) => {
    // res.redirect("/customer");
    res.send("<h1>Rebuilt</h1>")
});

/**
 * Log app details to console when starting up.
 *
 * @return {void}
 */
function logStartUpDetailsToConsole() {
    let routes = [];

    // Find what routes are supported
    app._router.stack.forEach((middleware) => {
        if (middleware.route) {
            // Routes registered directly on the app
            routes.push(middleware.route);
        } else if (middleware.name === "router") {
            // Routes added as router middleware
            middleware.handle.stack.forEach((handler) => {
                let route;

                route = handler.route;
                route && routes.push(route);
            });
        }
    });

    console.info(`Server is listening on port ${port}.`);
    console.info("Available routes are:");
    console.info(routes);
}
