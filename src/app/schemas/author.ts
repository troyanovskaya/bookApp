import { Book } from "./book";
import { Series } from "./series";

export  interface Author{
  author_name: String[];
  author_biography: String[];
  author_date_of_birth: String;
  author_books: Book[];
  author_img: String;
  author_series: Series[]
}