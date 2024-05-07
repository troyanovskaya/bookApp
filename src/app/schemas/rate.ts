import { Book } from "./book";
import { User } from "./user";


export interface Rate {
  _id: String,
  rate_book: Book,
  rate_user: User,
  rate_score: Number
}