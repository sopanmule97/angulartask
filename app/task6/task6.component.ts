import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component implements OnInit {
  Num:number=0;
  check:number=0
  prime=''
 
  constructor() { }

  ngOnInit(): void {
  }
  inNum(num:string){
    console.log(num)
        this.Num=Number(num);
        this.prime=this.checkprime(this.Num);
    console.log(this.checkprime(this.Num))
  }
  checkprime(num:number):string{
    this.check=0;
    if (num==0 || num==1) {
      return "this is prime number"
    }else{
      for (let index = 2; index < num; index++) {
        if(num%index==0){
          return 'this is Not prime number'
          this.check=1
          break;
        }
    }
    if(this.check==0){
      return 'this is prime number'
    }

  }
   return ''
  }

}
