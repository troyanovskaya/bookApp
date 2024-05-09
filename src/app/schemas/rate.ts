import { Book } from "./book";
import { User } from "./user";


export interface Rate {
  _id: String,
  rate_book: string,
  rate_user: string,
  rate_score: Number
}