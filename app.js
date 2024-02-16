var url = require("url");
var fs = require("fs");


const renderHTML = (path, response) => {
    fs.readFile(path, null, function(error,data) { //might replace null with utf8
        if (error) {
            res.writeHead(404);
            res.write("Oh no! File not found.");
        } else {
            response.write(data);
        }
        response.end();
    });
}

const handleRequest = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});

    var path = new URL (request.url, "http://localhost:3000").pathname;
    switch (path) {
        case "/":
            renderHTML("./index.html", response);
            break;
        case "/home":
            renderHTML("./index.html", response);
            break;
        case "/about":
            renderHTML("./about.html", response);
            break;
        default: 
            response.write("Oops something went wrong! Route not defined.");
            response.end();
    }
}

module.exports = {
    handleRequest
}