import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  check:string=''
  num:number=0;
  calculated:number=0;
  
  constructor() { }

  ngOnInit(): void {
  }
  clickmethod(name1:string){
    //console.log(name1);
    this.check=name1;
  }
  jsonstyle={
    'background-color':'darkgray'
    
  }

  claclulate(ref1:string){
      this.num= Number(ref1);
      console.log(this.num)
      console.log(this.calculated)
    if (this.check=='cube') {
      this.calculated= (this.num*this.num*this.num);
      this.jsonstyle={
        'background-color':'#cbe66a'
      }
    }else if(this.check=='squre'){
      this.calculated= (this.num*this.num);
      this.jsonstyle={  
        'background-color': '#e362f1'
      }
    }else{
      this.calculated=this.num;
    }
    
  }
}
