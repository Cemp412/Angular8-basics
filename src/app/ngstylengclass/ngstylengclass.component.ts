import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstylengclass',
  templateUrl: './ngstylengclass.component.html',
  styleUrls: ['./ngstylengclass.component.css']
})
export class NgstylengclassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mystyle= {
   ' color': 'yellow',
    'background-color':'purple',
    'width':'200px',
    'border-radius':'10px',
    'padding':'15px 20px',
  }

  myclass = {
   ' color' : true,
   ' fontme' : false,
   ' borderme' : true,
  }

}
