import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comm} from 'src/app/schemas/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
 @Input() comment?: Comm
 @Input() belongToUser:boolean = false;
 constructor(public commentService: CommentService){}
 @Output() commDeleted:EventEmitter<Boolean> = new EventEmitter<Boolean>;
 @Output() commEdit:EventEmitter<Comm> = new EventEmitter<Comm>;
 deleteComm(){
  if(this.comment){
    this.commentService.deleteComment(this.comment._id).subscribe( data =>{
      console.log(data);
      this.commDeleted.emit(true);
    })
  }
 }
 editComm(){
  if(this.comment){
    this.commEdit.emit(this.comment);
  }
 }
}
