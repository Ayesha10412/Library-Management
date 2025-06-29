import { Schema } from "mongoose";
import { IBook } from "../Interface/book.interface";
import mongoose from "mongoose";
const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    copies: {
      type: Number,
      required: true,
      min: [0, "Copies can not negative!"],
      validate: {
        validator: Number.isInteger,
        message: "Copies must be an integer.",
      },
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  { versionKey: false, timestamps: true }
);
export const Book = mongoose.model("Book", bookSchema);
