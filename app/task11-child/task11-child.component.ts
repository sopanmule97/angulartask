import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task11-child',
  templateUrl: './task11-child.component.html',
  styleUrls: ['./task11-child.component.css']
})
export class Task11ChildComponent implements OnInit {
  @Input() parentNum:number=0
  constructor() { }
  @Input() parentjson={
  }
  ngOnInit(): void {
   
  }
  
 

  


}
