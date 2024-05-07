import { Author } from "./author";
import { Genre } from "./genre";
import { SearchBy } from "./searchBy";
import { Series } from "./series";
import { User } from "./user";

export interface Book {
    _id: String,
    book_name: String;
    book_authors: String[];
    book_edition_year: Number;
    book_description: String[];
    book_keywords: String[];
    book_genres: String[];
    book_rates: {user: User, rate: Number, date: Date}[];
    book_average_rate: number;
    book_quotes: String[][];
    book_img: String[];
    book_series: String[];
    book_series_numbers: Number[]
}