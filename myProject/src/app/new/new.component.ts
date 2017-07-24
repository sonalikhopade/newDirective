import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
@Output() evn:EventEmitter<string>;
  constructor() { 
this.evn=new EventEmitter<string>();

  }

  ngOnInit() {
  }


}
