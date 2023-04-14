import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tast4',
  templateUrl: './tast4.component.html',
  styleUrls: ['./tast4.component.css']
})
export class Tast4Component implements OnInit {
  imgural:string="../../assets/Dom.jpeg"
  constructor() { }

  ngOnInit(): void {
  }
  jsonobj={

  }
  showimg(){
    
    this.jsonobj={
      'background-image': this.imgural,
      'background-color': 'bisque'
    }
  }
  notshowimg(){
    this.jsonobj={

    }
  }
}
