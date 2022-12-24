const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("Welcome to API Wrapper");
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

app.post("/testcases", async (req, res) => {
    const projectKey = req.body.project_key;
    const testCycleKey = req.body.test_cycle_key;
    const apiToken = req.body.api_token;
    try {
        const response = await fetch(
            `https://tcms.aiojiraapps.com/aio-tcms/api/v1/project/${projectKey}/testcycle/${testCycleKey}/testcase`,
            {
                method: "GET",
                headers: {
                    Authorization: "AioAuth " + apiToken,
                },
            }
        );
        const resultJson = await response.json();
        res.status(200).send(resultJson);
    } catch (e) {
        console.log(e);
        return res.status(400).send({ error: "Failed to get Test Cases" });
    }
});

module.exports = app;
