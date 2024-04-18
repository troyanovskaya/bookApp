import { Author } from "./author";
import { Genre } from "./genre";
import { SearchBy } from "./searchBy";
import { Series } from "./series";
import { User } from "./user";

export interface Book {
  book_name: String;
    book_authors: Author[];
    book_edition_year: Number;
    book_description: String[];
    book_keywords: String[];
    book_genres: Genre[];
    book_rates: {user: User, rate: Number, date: Date}[];
    book_average_rate: Number;
    book_quotes: String[][];
    book_comments: {user: User, comment: String[], date: Date}[];
    book_reviews: {user: User, review: String[], date: Date}[];
    book_img: String;
    book_series: Series[]
}