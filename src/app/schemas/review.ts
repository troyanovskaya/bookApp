import { Book } from "./book";
import { User } from "./user";

export interface Review {
  _id: String,
  review_book: String,
  review_book_img: String[],
  review_book_name: String,
  review_book_authors: String[],
  review_user: User,
  review_user_img: String,
  review_user_login: String,
  review_text: string[],
  review_date: string
}