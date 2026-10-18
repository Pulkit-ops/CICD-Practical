const fs = require("fs");
const assert = require("assert");

const html = fs.readFileSync("index.html", "utf8");

assert.ok(
    html.includes("My CI/CD Practical"),
    "Website heading is missing"
);

assert.ok(
    html.includes("Build, Test and Deploy"),
    "Website paragraph is missing"
);

console.log("All tests passed successfully!");
