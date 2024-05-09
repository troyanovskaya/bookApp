import { Component, OnInit} from '@angular/core';
import { VisibilityService } from './services/visibility.service';
import { LogInService } from './services/log-in.service';
import { Router, NavigationEnd } from '@angular/router';
import { RecService } from './services/rec.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public visibilityService: VisibilityService,
    public logInService: LogInService, private router: Router, public recService: RecService){}
  ngOnInit(): void {
    this.logInService.checkLoggedInUser();
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
    if(this.logInService.user){
      this.recService.getBookRecs(this.logInService.user);
    }


  }
}
