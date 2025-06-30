import express, { Request, Response } from "express";
import { Book } from "../Models/book.models";
import { Borrow } from "../Models/borrow.model";
export const route = express.Router();

route.post("/api/borrow", async (req: Request, res: Response) => {
  try {
    const { book, quantity, dueDate } = req.body;
    const foundBook = await Book.findById(book);
    if (!foundBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found!",
      });
    }
    await foundBook.borrowBook(quantity);
    const data = await Borrow.create({ book, quantity, dueDate });
    res.status(201).json({
      success: true,
      message: "Book borrowed  successfully!",
      data,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message, error });
  }
});
