const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Test Automation Backend");
});

module.exports = app;