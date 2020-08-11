import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pninfosys';
  num1 : number = 28;
  num2 : number = 2;

  date = new Date();
  
  para1='How to developer';

 hide: boolean=true; // false boolean value use (property binding)
}
