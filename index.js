const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html");

    let requestedPath = "./htmlPages/";

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
        default: {
            requestedPath += "/404.html";
            break;
        }
    }

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
