import {Book} from './book';
export enum Role{
  'user',
  'administrator'
}
export  interface User{
  user_role: Role;
  user_login: String;
  user_password: String;
  user_email: String;
  user_img: String;
  user_books_saved: Book[];
  user_books_read: Book[];
  user_books_dropped: Book[];
  user_rates: {book: Book, rate: number}[];
  user_saved_quotes: {book:Book, quote: String[]};
  user_comments: {book: Book, comment: String[], date: Date};
  user_reviews: {book: Book, review: String[], date: Date};
  user_books_recommendations: Book[];
}