import "dotenv/config";
import { eq } from "drizzle-orm";
import type { Request, Response } from "express";
import db from "../db/index.js";
import { booksTable } from "../drizzle/schema.js";

//Interfaces
export const getBooks = async (req: Request, res: Response) => {
  try{
      const books = await db.select().from(booksTable);
  res.setHeader("X-App-Version", "1.0");
  res.status(200).json(books);
  } catch (error) {
    console.error("getBooks", error);
  }

}

export const getBookById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    // booksTable.id is UUID (string), so req.params.id should be used as a string.
    const id = req.params.id;
    if (!id) return res.status(400).json({ error: "id is required" });

    const rows = await db.select().from(booksTable).where(eq(booksTable.id, id)).limit(1);
    const book = rows[0];
    if (!book) return res.status(404).json({ error: "Book not found" });
    return res.status(200).json(book);
  } catch (error) {
    console.error("getBookById", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// export const postBook = (req: Request, res:Response) => {
//   const { title } = req.body;
//   const { author } = req.body;
//   const id = books.length+1;
//   if(!title?.trim() || !author?.trim()) return res.status(400).json( {error: 'Field required.'})
//   const book: Book = { id, title, author };
//   books.push(book);
//   return res.status(201).json( {message: 'Book is created success', id} );
// }

// export const deleteBookById = (req: Request, res:Response) => {
//   const id = Number(req.params.id);

//   if (Number.isNaN(id)) {
//     return res.status(400).json({ error: "Invalid book id" });
//   }

//   const indexOfTheBook = books.findIndex((e) => e.id === id);

//   if(indexOfTheBook < 0) return res.status(404).json( {"error": "Book doesnt exists.."} );
//   books.splice(indexOfTheBook, 1)
//   return res.status(200).json({ message: `The book with id ${id} has been deleted.` });
// }