import { Injectable } from '@angular/core';
import { Review } from '../schemas/review';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  postReview(review: any){
    return this.http.post<Review>('https://bookappback.onrender.com/reviews', review);
  }
  getReviewByBookId(id: String){
    return this.http.get<Review[]>(`https://bookappback.onrender.com/reviews/books/${id}`);
  }
  deleteReview(id: String){
    return this.http.delete<Review>(`https://bookappback.onrender.com/reviews/${id}`);
  }
  constructor(public http: HttpClient) { }
}
