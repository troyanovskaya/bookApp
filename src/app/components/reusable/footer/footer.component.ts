import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  icons:{name: String, src: String}[] = [{name: 'instagram', src: 'assets/instagram-icon.png'},
  {name: 'facebook', src: 'assets/facebook-icon.png'},
  {name: 'youtube', src: 'assets/youtube-icon.png'}
]

}
