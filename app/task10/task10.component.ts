import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task10',
  templateUrl: './task10.component.html',
  styleUrls: ['./task10.component.css']
})
export class Task10Component implements OnInit {
  imgurl:string=''
  str:string=''
  constructor() { }
  json={

  }
  ngOnInit(): void {
  }
  mouseoutdiv(){
    this.str=''
 this.json={
  'opacity': '1'
    }
  }
  mouseoverdiv(){
    this.str='plz go out to see image'
    this.json={
      'opacity': '0.5'
    }
  }
}
 

