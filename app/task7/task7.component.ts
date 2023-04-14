import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css']
})
export class Task7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checksign(userId:string,password:string){
    if(userId=='sopan' && password=='123'){
    alert('your id and passward is right')
     } else if(userId=='sopan'){
      alert('your password is wrong ......')
    }else{
      alert('some thing wrong ......')
    }
  }

}
