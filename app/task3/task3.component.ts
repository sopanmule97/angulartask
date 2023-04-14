import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  jsonobj={

  }
  divstru(){
    this.jsonobj={
      'text-shadow': '0.5px',
    'text-size-adjust': '20px',
    'color':'red'
    }
  }
  divstru1(){
    this.jsonobj={
      'text-shadow': '0.5px',
    'text-size-adjust': '20px',
    'color':'black'
    }
  }

}
