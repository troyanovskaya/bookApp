import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comm } from '../schemas/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  postComment(comment: any){
    return this.http.post<Comm>('https://bookappback.onrender.com/comments', comment);
  }
  deleteComment(id: String){
    return this.http.delete<Comm>(`https://bookappback.onrender.com/comments/${id}`);
  }
  editComment(comm: Comm){
    return this.http.patch<Comm>(`https://bookappback.onrender.com/comments/${comm._id}`, comm);
  }
  getCommentByBookId(id: String){
    return this.http.get<Comm[]>(`https://bookappback.onrender.com/comments/books/${id}`);
  }
  constructor(public http: HttpClient) { }
}
