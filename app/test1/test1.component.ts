import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
    Colname:string='this colore is chartreuse'
    white:string="white"
    
    msg:string=''
  constructor() { }

  ngOnInit(): void {
  }
  clickmethod(name:string){
      this.Colname=name;
      this.msg='this colore is '
  }
}
