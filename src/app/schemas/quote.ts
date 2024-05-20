import { Book } from "./book";
import { User } from "./user";

export interface Quote {
  _id: String,
  quote_book: String,
  quote_book_img: String[],
  quote_book_name: String,
  quote_book_authors: String[],
  quote_user: String,
  quote_user_img: String,
  quote_user_login: String,
  quote_text: String[],
  quote_character: String,
  quote_date: String
}