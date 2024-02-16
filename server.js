var http = require("http");
var app = require("./app");

http.createServer(app.handleRequest).listen(3000, function(error) {
    if (error) {
        console.log("Oops, something went wrong!", error)
    } else {
        console.log("Server listening on port 3000")
    }
});

