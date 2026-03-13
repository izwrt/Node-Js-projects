import type { Request, Response, NextFunction } from "express";
import { books } from '../models/book.model.js'

//Interfaces
interface BookBody {
  title: string;
  author: string;
  id: number;
}

export const getBooks = (req: Request, res: Response) => {
  res.setHeader("X-App-Version", "1.0");
  res.status(200).json(books);
}

export const getBookById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const book = books.find(e => e.id === id)
  if(isNaN(id)) return res.status(400).json( {error: `id must be a type number`})
  return res.json(book)
}

export const postBook = (req: Request, res:Response) => {
  const { title } = req.body;
  const { author } = req.body;
  const id = books.length+1;
  if(!title?.trim() || !author?.trim()) return res.status(400).json( {error: 'Field required.'})
  const book: BookBody = { id, title, author,}
  books.push(book);
  return res.status(201).json( {message: 'Book is created success', id} );
}

export const deleteBookById = (req: Request, res:Response) => {
  const id = Number(req.params.id);

   if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid book id" });
  }

  const indexOfTheBook = books.findIndex(e => e.id === id);

  if(indexOfTheBook < 0) return res.status(404).json( {"error": "Book doesnt exists.."} );
  books.splice(indexOfTheBook, 1)
  return res.status(200).json( {"message" :`The book: ${indexOfTheBook}, has been deleted.`} );
}