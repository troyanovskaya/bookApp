import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comm } from 'src/app/schemas/comment';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss']
})
export class EditCommentComponent implements OnInit{
  @Input() comm?:Comm
  @Output() editedText:EventEmitter<string[]>= new EventEmitter<string[]>;
  @Output() closeWindow:EventEmitter<Boolean>= new EventEmitter<Boolean>;
  text:string = '';
  ngOnInit(): void {
    if(this.comm){
      this.text = this.comm.comment_text.join("\n");
    }
  }
  close(){
    this.closeWindow.emit(true);
  }
  editText(){
    if(this.text){
      let update = this.text.split("\n");
      this.editedText.emit(update);
      this.close();
    }
  }
}
