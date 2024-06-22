const http = require("http");
const fs = require("fs");

// Create a server.
const server = http.createServer((req, res) => {
    // Set the response headers
    res.setHeader("Content-type", "text/html");

    // Set the first part of the route pointing to the directory containing the html files.
    let requestedPath = "./htmlPages/";

    // Set the "requestedPath" variable based on the requested url.
    switch (req.url) {
        case "/": {
            requestedPath += "index.html";
            break;
        }
        case "/about": {
            requestedPath += "about.html";
            console.log(requestedPath);
            break;
        }
        case "/contact-me": {
            requestedPath += "contact-me.html";
            break;
        }
        // Set the 404 error page as the default response.
        default: {
            requestedPath += "/404.html";
            break;
        }
    }

    // Write the requested html file in the response.
    fs.readFile(requestedPath, (error, htmlContent) => {
        if (error) {
            console.log(error);
            res.end();
        } else {
            res.end(htmlContent);
        }
    });
});

server.listen(8080, () => {
    console.log("The server is listening in the port 8080");
});
