const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(cors());

const JENKINS_URL = "http://host.docker.internal:8080";
const JOB_NAME = "devops-project";

// Build Status
app.get("/jenkins/status", (req, res) => {
    exec(`curl -s ${JENKINS_URL}/job/${JOB_NAME}/lastBuild/api/json`, (err, stdout) => {
        if (err) return res.json({ error: "Jenkins error" });
        res.json(JSON.parse(stdout));
    });
});

// Pipeline
app.get("/jenkins/pipeline", (req, res) => {
    exec(`curl -s ${JENKINS_URL}/job/${JOB_NAME}/lastBuild/wfapi/describe`, (err, stdout) => {
        if (err) return res.json({ error: "Pipeline error" });
        res.json(JSON.parse(stdout));
    });
});

// Docker Containers
app.get("/docker", (req, res) => {
    exec("docker ps --format '{{json .}}'", (err, stdout) => {
        if (err) return res.json([]);

        const containers = stdout
            .trim()
            .split("\n")
            .filter(Boolean)
            .map(line => JSON.parse(line));

        res.json(containers);
    });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
