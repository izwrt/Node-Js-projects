import http from "node:http";
import type { RequestListener } from "node:http";

const handler: RequestListener = (req, res) => {
    console.log(`Incomming Request at [${new Date().toLocaleString()}]`);

    switch(req.url) {
        case '/':
            res.writeHead(200);
            return res.end(`Homepage`);

        case '/contact-us':
            res.writeHead(200)
            return res.end(`Contact me at izwrt@gmail.com`);
        
        default:
            res.writeHead(400);
            return res.end(`Page not found`);
    }
};

const server = http.createServer(handler);

server.listen(8000, () => {
    console.log("Server is listening....!")
});
