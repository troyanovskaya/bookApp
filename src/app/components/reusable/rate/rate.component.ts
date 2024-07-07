import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/schemas/book';
import { BooksService } from 'src/app/services/books.service';
import { LogInService } from 'src/app/services/log-in.service';
import { RateService } from 'src/app/services/rate.service';
import { RecService } from 'src/app/services/rec.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements AfterViewChecked {
  ngAfterViewChecked(): void {
    let s = this.stars.toArray()
    if(!this.set && this.rate && s.length==5){
      this.set = true;
      let per = (this.rate %1)*30;
      if(this.rate<4 && (this.rate>3 || this.rate==3)){
        this.renderer.setStyle(s[3].nativeElement, 'width', `${per}px`);
        this.renderer.setStyle(s[3].nativeElement, 'backgroundColor', `#FADA5E`);

        this.renderer.setStyle(s[0].nativeElement, 'backgroundColor', `#FADA5E`);
        this.renderer.setStyle(s[1].nativeElement, 'backgroundColor', `#FADA5E`);
        this.renderer.setStyle(s[2].nativeElement, 'backgroundColor', `#FADA5E`);
        this.renderer.setStyle(s[4].nativeElement, 'backgroundColor', `white`);
      } else if(this.rate<5 && (this.rate>4 || this.rate==4)){
        this.renderer.setStyle(s[4].nativeElement, 'width', `${per}px`);
        this.renderer.setStyle(s[4].nativeElement, 'backgroundColor', `#FADA5E`);

        this.renderer.setStyle(s[0].nativeElement, 'backgroundColor', `#FADA5E`);
        this.renderer.setStyle(s[1].nativeElement, 'backgroundColor', `#FADA5E`);
        this.renderer.setStyle(s[2].nativeElement, 'backgroundColor', `#FADA5E`);
        this.renderer.setStyle(s[3].nativeElement, 'backgroundColor', `#FADA5E`);
      } else if(this.rate<3 && (this.rate>2 || this.rate==2)){
        this.renderer.setStyle(s[2].nativeElement, 'width', `${per}px`);
        this.renderer.setStyle(s[2].nativeElement, 'backgroundColor', `#FADA5E`);

        this.renderer.setStyle(s[0].nativeElement, 'backgroundColor', `#FADA5E`);
        this.renderer.setStyle(s[1].nativeElement, 'backgroundColor', `#FADA5E`);
        this.renderer.setStyle(s[3].nativeElement, 'backgroundColor', `white`);
        this.renderer.setStyle(s[4].nativeElement, 'backgroundColor', `white`);
      } else if(this.rate<2 && (this.rate>1 || this.rate==1)){
        this.renderer.setStyle(s[1].nativeElement, 'width', `${per}px`);
        this.renderer.setStyle(s[1].nativeElement, 'backgroundColor', `#FADA5E`);

        this.renderer.setStyle(s[0].nativeElement, 'backgroundColor', `#FADA5E`);
        this.renderer.setStyle(s[2].nativeElement, 'backgroundColor', `white`);
        this.renderer.setStyle(s[3].nativeElement, 'backgroundColor', `white`);
        this.renderer.setStyle(s[4].nativeElement, 'backgroundColor', `white`);
      } else if(this.rate<1 && (this.rate>0 || this.rate==0)){
        this.renderer.setStyle(s[0].nativeElement, 'width', `${per}px`);
        this.renderer.setStyle(s[0].nativeElement, 'backgroundColor', `#FADA5E`);

        this.renderer.setStyle(s[1].nativeElement, 'backgroundColor', `white`);
        this.renderer.setStyle(s[2].nativeElement, 'backgroundColor', `white`);
        this.renderer.setStyle(s[3].nativeElement, 'backgroundColor', `white`);
        this.renderer.setStyle(s[4].nativeElement, 'backgroundColor', `white`);
      }

    }
  }
  constructor(private renderer:Renderer2, public logInService: LogInService,
    public rateService: RateService, private route: ActivatedRoute,
    public booksService: BooksService, public recsService: RecService
  ){}
  @Input() rate!: number;
  loaded: boolean = false;
  id: String = '';
  @Input() book?:Book;
  set:boolean = false;
  highlight = 0; // Нове поле для підсвітки малих блоків
  @ViewChildren('fill') stars!: QueryList<any>;
  @ViewChild('container', { static: true }) container!: ElementRef;
  sendRate(score: Number){
    let user = this.logInService.user;
    if(user){
      let rate = {rate_user: user, rate_book: this.book, rate_score: score};
      this.rateService.postRate(rate).subscribe( (data) => {
        this.recsService.getBookRecs(user);
        let st = this.stars.toArray()
        for (let s of st){
          this.renderer.setStyle(s.nativeElement, 'width', `30px`);
          // if(this.rate>data){
          //   this.renderer.setStyle(s.nativeElement, 'backgroundColor', `white`);
          // }
          // if(data-this.rate){
          //   this.renderer.setStyle(s.nativeElement, 'backgroundColor', `#FADA5E`);
          // }
        }

        this.rate = data;
        this.set = false;
        console.log(data);
        //alert('You have voted!')
      });
    } else{
      alert('Sign in to rate the book!')
    }
  }
  onMouseMove(event: MouseEvent) {
    const containerLeft = this.container.nativeElement.offsetLeft;
    const mouseX = event.clientX - containerLeft;

    if (mouseX < 30) {
      this.highlight = 1;
    } else if (mouseX < 60) {
      this.highlight = 2;
    } else if (mouseX < 90) {
      this.highlight = 3;
    } else if (mouseX < 120) {
      this.highlight = 4;
    } else if (mouseX < 150) {
      this.highlight = 5;
    } else {
      this.highlight = 0;
    }
  }
  onMouseLeave(){
    this.highlight = 0;
  }


}


