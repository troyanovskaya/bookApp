import { Component } from '@angular/core';
import { VisibilityService } from 'src/app/services/visibility.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(public visibilityService: VisibilityService){}
}
