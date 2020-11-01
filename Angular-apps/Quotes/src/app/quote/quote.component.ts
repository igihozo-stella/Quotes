import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1,'"Be yourself; everyone else is already taken."','Oscar Wilde','Cyrus Kent',new Date(2020,10,27)),
    new Quote(2,'“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.”','Dr.Seus','Kamal Neo',new Date(2020,11,1)),
    new Quote(3,'“Don’t walk behind me; I may not lead. Don’t walk in front of me; I may not follow. Just walk beside me and be my friend.”','Albert Camus','Naomi Camp',new Date(2020,10,31)),
    new Quote(4,'“Be who you are and say what you feel, because those who mind don’t matter, and those who matter don’t mind.”','Bernard M. Baruch','Jerome Grant',new Date(2020,10,30)),
    new Quote(5,'“No one can make you feel inferior without your consent.”','Eleanor Roosevelt','Rose Maine',new Date(2020,11,1)),
  ];
  toggleDetails (index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  deleteQuote(isDelete, index){
    if (isDelete) {
      this.quotes.splice(index,1);
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
