import { Component} from '@angular/core';
import { LogInService } from 'src/app/services/log-in.service';
import { VisibilityService } from 'src/app/services/visibility.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{
  visible:boolean = false;
  constructor(public visibilityService: VisibilityService, public logInService: LogInService){}

  onProfileClick(){
    this.visible = !this.visible;
  }
}
