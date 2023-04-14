import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.css']

})
export class Test5Component implements OnInit {
  num1:number=1;
  num:number=1;
  deletenum:number=1;
  salary:number=0;

  employee=[{
    empid:0,
    empname:'',
    empsalary:0
  }];
  empdata:any[]=[];

  constructor() {
   
   }

  ngOnInit(): void {

  }
  remove(num:any){
    this.empdata.splice(num,1);
    // this.deletenum=num;
    // for (let index = 0; index < this.employee.length; index++) {
    //   if(this.employee[index].empid==num){
    //     this.employee.splice(index,1);
    //     break;
    //   }
    // }
   
  }
  
  add(id:string,name:string,salary:string){
    this.num1++;

    this.num= Number(id);
    this.salary=Number(salary)

    this.empdata.push(
      {
      empid: this.num,
    empname: name,
    empsalary:this.salary
    })
    
    console.log("i ama arry");
    for (let index = 0; index < this.employee.length; index++) {
      console.log(this.employee[index].empid)
     
    }
  }

}
