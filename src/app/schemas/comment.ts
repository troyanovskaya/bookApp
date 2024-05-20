import { Book } from "./book";
import { User } from "./user";

export interface Comm {
  _id: String,
  comment_book: String,
  comment_book_img: String[],
  comment_book_name: String,
  comment_book_authors: String[],
  comment_user: String,
  comment_user_img: String,
  comment_user_login: String,
  comment_text: string[],
  comment_date: string
}