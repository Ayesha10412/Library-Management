import express, { Request, Response } from "express";
import { Book } from "../Models/book.models";
export const routes = express.Router();
//create book
routes.post("/api/books", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await Book.create(body);
    res.status(201).json({
      success: true,
      message: "Book created successfully!",
      data,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message, error });
  }
});
//get all books
routes.get("/api/books", async (req: Request, res: Response) => {
  try {
    const genre = req.query.filter as string;
    const sortBy = (req.query.sortBy as string) || "createdAt";
    const sortOrder = req.query.sort === "asc" ? 1 : -1;
    const limit = parseInt(req.query.limit as string) || 10;
    const filter: any = {};
    if (genre) {
      filter.genre = genre;
    }
    const data = await Book.find(filter)
      .sort({ [sortBy]: sortOrder })
      .limit(limit);
    res.status(201).json({
      success: true,
      message: "Book created successfully!",
      data,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message, error });
  }
});
