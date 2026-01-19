import express, {Router} from 'express';
import {getBooks, getBookById, postBook, deleteBookById} from './../controllers/book.controller.js'

const router = Router();

//Routes
router.get("/", getBooks);

router.get("/:id", getBookById);

router.post("/", postBook)

router.delete("/:id", deleteBookById)

export default router;