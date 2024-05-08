import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.scss']
})
export class BtnAddComponent {
  @Output() visibilityChange: EventEmitter<boolean> = new EventEmitter<boolean>;
  @Input() currentState?: boolean;
  showHidden(){
  this.visibilityChange.emit(!this.currentState)

 }
}

