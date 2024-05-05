import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comm } from '../schemas/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  postComment(comment: any){
    return this.http.post<Comm>('http://localhost:3000/comments', comment);
  }
  getCommentByBookId(id: String){
    return this.http.get<Comm[]>(`http://localhost:3000/comments/books/${id}`);
  }
  constructor(public http: HttpClient) { }
}
