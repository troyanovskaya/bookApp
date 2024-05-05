import { Component, Input } from '@angular/core';
import { Comm} from 'src/app/schemas/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
 @Input() comment?: Comm
}
