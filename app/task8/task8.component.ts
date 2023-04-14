import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task8',
  templateUrl: './task8.component.html',
  styleUrls: ['./task8.component.css']
})
export class Task8Component implements OnInit {
num=0
  constructor() { }

  ngOnInit(): void {
  }
check(num:string){
 this.num=Number(num);
}


}
