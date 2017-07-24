import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

@Output()
emi:EventEmitter<string>
@Output()
emi1:EventEmitter<string>

  constructor() {
    this.emi= new EventEmitter<string>()
    this.emi1= new EventEmitter<string>()
   }

  ngOnInit() {
  }
sendPath(x:string){

this.emi.emit(x)

}

sendPath1(y:string){
  
this.emi1.emit(y)
}

}

