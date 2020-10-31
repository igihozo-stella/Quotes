import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];
  constructor(){
    this.quotes=['"Be yourself; everyone else is already taken."','“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.”']
  }
  
}
