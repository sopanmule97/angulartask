import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task9',
  templateUrl: './task9.component.html',
  styleUrls: ['./task9.component.css']
})
export class Task9Component implements OnInit {
  mysize:number=10;
  wid:string='20px'
  wid1:number=20;
  no:string=''
  
  constructor() { }

  ngOnInit(): void {
  }
  keydownlen(len:string){
    //console.log(len.length)
    this.no=len;
      if(len.length <= 0){
        this.wid1=20;
        this.wid= '20'+'px';
      }else{
        this.wid1=len.length*10;
      this.wid= String(this.wid1)
    this.wid= this.wid+'px';
    console.log(len)
      }
  }

  json={
      width : this.wid
  }
}
