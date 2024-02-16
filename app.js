var url = require("url");
var fs = require("fs");

const renderContent = (path, response) => {
    fs.readFile(path, "utf8", function(error,data) { //might replace null with utf8
        if (error) {
            response.writeHead(404);
            response.end("Oh no! File not found.");
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
            renderContent("./general.txt", response);
        break;
        case "/superhero":
            renderContent("./superhero.html", response);
            break;
        default: 
            response.write("Oops something went wrong! Route not defined.");
            response.end();
    }
}

module.exports = {
    handleRequest
}