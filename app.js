var url = require("url");
var fs = require("fs");

const renderContent = (path, response) => {
    fs.readFile(path, "utf8", function(error,data) { 
        if (error) {
            response.writeHead(404);
            response.end("Oh no! File not found.");
            response.write()
        } else {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data);
            response.end();
        }
    });
}

const handleRequest = (request, response) => {

    var path = new URL (request.url, "http://localhost:3000").pathname;
    switch (path) {
        case "/":
        case "/home":
            renderContent("./index.html", response);
            break;
        case "/about":
            renderContent("./about.html", response);
            break;
        case "/general":
            renderContent("./general.html", response);
        break;
        case "/superhero":
            renderContent("./superhero.html", response);
            break;
        default: 
            response.write("Oops! This route is not defined Here's a joke to entertain you instead: Why did Batman and Robin never fight crime on April 1st? ............................................. Because the Joker would take it too seriously!");
            response.end();
    }
}

module.exports = {
    handleRequest
}