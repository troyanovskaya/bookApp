import { Component } from '@angular/core';
import { VisibilityService } from './services/visibility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookApp';
  constructor(public visibilityService: VisibilityService){}
}
