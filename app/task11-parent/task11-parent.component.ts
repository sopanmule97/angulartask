import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task11-parent',
  templateUrl: './task11-parent.component.html',
  styleUrls: ['./task11-parent.component.css']
})
export class Task11ParentComponent implements OnInit {
  num:number=0;
  constructor() { }
  jsonobj={}
  ngOnInit(): void {
  }
  numTake(num:string){
    this.num=Number(num);
    if (this.num>6) {
      this.jsonobj={
        'background-color': 'red'
      }
    }else if (this.num==6) {
      this.jsonobj={
        'background-color': 'yellow'
      }
    }else if (this.num==0) {
      this.jsonobj={
        'background-color': 'white'
      }
    }else if (this.num<6 && this.num>=1) {
      this.jsonobj={
        'background-color': 'green'
      }
    }
  }
  
}
