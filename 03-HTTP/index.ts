import type { RequestListener } from "node:http";
import http from "node:http";
import fs from "node:fs";

const handler: RequestListener = (req, res) => {
  const method = req.method;
  const path = req.url;

  const log = `\n[${new Date().toLocaleDateString()}]: ${method} ${path}`
  fs.appendFileSync('log.txt',log, 'utf-8');

  switch (method) {
    case "GET": {
      switch (path) {
        case "/":
            return res.writeHead(200).end("Hello from the Server!");

        case '/contact-us':
            return res.writeHead(200).end("izwrt@gmail.com")

        case "/tweet":
                return res.writeHead(201).end("Tweet-1\nTweet-2")
      }
    }
    break;

    case "POST": {
        switch (path) {
            case "/tweet":
                return res.writeHead(201).end("Hello from the server!")
        }
    }
  }

  return res.writeHead(404).end('Ops Your lost...!')
};

const server = http
  .createServer(handler)
  .listen(8000, () => console.log(`Server started.... OLA!`));
