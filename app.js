const http = require("http");
const fs = require ("fs");
const port = 3000;

const senErrorMessage = (res, statusCode, message) => {
    res.writeHead(statusCode, {"Content-Type": "text/plain"});
    res.end(message);
}

const sendHtmlResponse = (res, data) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    res.end();
};

const server = http.createServer(function(req, res) {
    if(req.url.includes("/home")) {
        fs.readFile("./index.html", function(error, data) {
            if(error) {
                senErrorMessage(res, 404, "Error: Page not found")
            } else {
                sendHtmlResponse(res, data)
            }
        });
    } else if(req.url.includes("/about")) {
        fs.readFile("./about.html", function(error, data) {
            if(error) {
                senErrorMessage(res, 404, "Error: Page not found")
            } else {
                sendHtmlResponse(res, data)
            }
        });  
    } else if(req.url.includes("/superhero")) {
        fs.readFile("./superhero.html", function(error, data) {
            if(error) {
                senErrorMessage(res, 404, "Error: Page not found")
            } else {
                sendHtmlResponse(res, data)
            }
        });  
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Oh no! There is an error: Page not found")
    }
});

server.listen(port, function(error) {
    if (error) {
        console.log("Oops, something went wrong!", error)
    } else {
        console.log("Server listening on port " + port)
    }
})