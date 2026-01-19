import express from "express";
import bookRouter from "./Routes/book.routes.js"
import {loggerMiddlerware} from './middleware/logger.js'

const app = express();
const PORT: number = 8000;

//Json parsing
app.use(express.json());

//logging middleware
app.use(loggerMiddlerware);

// Routes
app.use('/books', bookRouter)

app.listen(PORT, () => {
  console.log(`HTTP Server is running on PORT ${PORT}`);
});

