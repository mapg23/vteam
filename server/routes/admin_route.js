"use strict";

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Hello admin route</h1>")
});

module.exports = router;