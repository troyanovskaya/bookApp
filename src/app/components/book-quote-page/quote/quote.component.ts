import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quote } from 'src/app/schemas/quote';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  @Input() quote?: Quote;
  @Input() belongToUser: Boolean = false;
  @Output() reloadQuotes: EventEmitter<Boolean> = new EventEmitter<Boolean>;
  constructor(public quoteservice: QuoteService){}
  deleteQuote(){
    if(this.quote){
      this.quoteservice.deleteQuote(this.quote._id).subscribe( data =>{
        console.log(data);
        this.reloadQuotes.emit(true);
      });
    }
  }

}
