var url = require("url");
var fs = require("fs");



const renderHTML = (path, response) => {
    fs.readFile(path, null, function(error,data) { //might replace null with utf8
        if (error) {
            response.writeHead(404);
            rensponse.write("File not found");
        } else {
            response.write(data);
        }
        rensponse.end();
    });
}

const handleRequest = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});

    var path = new URL (request.url).pathname;
    switch (path) {
        case "/":
            renderHTML("./index.html", response);
            break;
        case "/about":
            renderHTML("./about.html", response);
            break;
        default: 
            response.writeHead(404);
            response.write("Route not defined");
            response.end();
    }
}

module.exports = {
    handleRequest
}


// module.exports = {
//     handleRequest: function(request, response) {
//         response.writeHead(200, {"Content-Type": "text/html"});
    
//         var path = url.parse(request.url).pathname;
//         switch (path) {
//             case "/":  
//         }
//     }
// };