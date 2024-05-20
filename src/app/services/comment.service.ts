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
  deleteComment(id: String){
    return this.http.delete<Comm>(`http://localhost:3000/comments/${id}`);
  }
  editComment(comm: Comm){
    return this.http.patch<Comm>(`http://localhost:3000/comments/${comm._id}`, comm);
  }
  getCommentByBookId(id: String){
    return this.http.get<Comm[]>(`http://localhost:3000/comments/books/${id}`);
  }
  constructor(public http: HttpClient) { }
}
