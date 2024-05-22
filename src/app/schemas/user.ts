import {Book} from './book';
export enum Role{
  'user',
  'administrator'
}
export  interface User{
  _id: String
  user_role: Role;
  user_login: String;
  user_password: String;
  user_email: String;
  user_img: String;
  user_books_saved: String[];
  user_books_read: String[];
  user_books_dropped: String[];
  user_books_favourite: String[];
  user_rates: {book: Book, rate: number}[];
  user_saved_quotes: {book:Book, quote: String[]};
  user_reviews: {book: Book, review: String[], date: Date};
  user_books_recommendations: String[];
}