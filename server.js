const express = require("express");
const app = express();

const superApp = require("./app");

app.use(express.static("public"));
app.use(superApp.handleRequest);


const server = app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

