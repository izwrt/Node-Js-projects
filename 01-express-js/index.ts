import express from "express";
import type {Request, Response} from "express";


const app = express();

app.get('/', (req: Request, res: Response) => {
    res.end('Homepage')
});

app.get('/contact-us', (req, res) => {
    res.end('You can Cantact me at my email address')
});

app.get('/tweets', (req, res) => {
    res.status(200).end("Here are your tweets")
});

app.post('/tweets', (req, res) => {
    res.status(201).end("Tweet created")
});

app.listen(8000, () => console.log(`Server is running on PORT 8000`))



