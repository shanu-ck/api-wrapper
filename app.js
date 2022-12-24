const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Test Automation Backend");
});

app.post("/cycles", async (req, res) => {
    const projectKey = req.body.project_key;
    const apiToken = req.body.api_token;
    try {
        const response = await fetch(
            `https://tcms.aiojiraapps.com/aio-tcms/api/v1/project/${projectKey}/testcycle`,
            {
                method: "GET",
                headers: {
                    Authorization: "AioAuth " + apiToken,
                    "content-type": "application/json",
                },
            }
        );
        const resultJson = await response.json();
        res.status(200).send(resultJson);
    } catch (e) {
        console.log(e);
        return res.status(400).send({ error: "Failed to get cycles" });
    }
});

module.exports = app;
