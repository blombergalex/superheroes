var url = require("url");
var fs = require("fs");

const renderContent = (path, response) => {
    fs.readFile(path, "utf8", function(error,data) { 
        if (error) {
            console.log("Error reading file:", error);
            response.writeHead(404);
            response.end("Oops! Looks like the Batcave is empty. The superhero file you're looking for seems to have flown off into the sunset. Try checking the coordinates again!");
        } else {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data);
            response.end();
        }
    });
}

const handleRequest = (request, response) => {

    var urlObject = new URL (request.url, "http://localhost:3000");
    var path = urlObject.pathname;
    var searchParameters = urlObject.searchParams;

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
        case "/superheroes":
            var superheroName = searchParameters.get("name");
            console.log(superheroName);
            if (superheroName) {
                renderContent(`./heroes/${superheroName}.html`, response);
            } else {
                renderContent("./superheroes.html", response);
            }
            break;
        default: 
            response.write("Oops! This route is not defined Here's a joke to entertain you instead: Why did Batman and Robin never fight crime on April 1st? ............................................. Because the Joker would take it too seriously!");
            response.end();
    }
}

module.exports = {
    handleRequest
}