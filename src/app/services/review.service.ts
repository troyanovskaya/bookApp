import { Injectable } from '@angular/core';
import { Review } from '../schemas/review';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  postReview(review: any){
    return this.http.post<Review>('http://localhost:3000/reviews', review);
  }
  getReviewByBookId(id: String){
    return this.http.get<Review[]>(`http://localhost:3000/reviews/books/${id}`);
  }
  deleteReview(id: String){
    return this.http.delete<Review>(`http://localhost:3000/reviews/${id}`);
  }
  constructor(public http: HttpClient) { }
}
