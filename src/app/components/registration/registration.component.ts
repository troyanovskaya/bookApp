import { Component } from '@angular/core';
import { VisibilityService } from 'src/app/services/visibility.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(public visibilityService: VisibilityService){}

}
