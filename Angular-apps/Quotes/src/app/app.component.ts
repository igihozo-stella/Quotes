import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]=[
    {id:1,name:'"Be yourself; everyone else is already taken."'},
    {id:2,name:'“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.”'},
    {id:3,name:'“Don’t walk behind me; I may not lead. Don’t walk in front of me; I may not follow. Just walk beside me and be my friend.”'},
    {id:4,name:'“Be who you are and say what you feel, because those who mind don’t matter, and those who matter don’t mind.”'},
    {id:5,name:'“No one can make you feel inferior without your consent.”'},
  ];
  
  
}
