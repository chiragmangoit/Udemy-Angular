import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css']
})
export class RecepieComponent implements OnInit {

  descValue = '';
  recepieValue = {};
  constructor() { }

  ngOnInit() {
  }

  showDesc(comp:{value:string,recepie:{}}){
    this.descValue = comp.value;
    this.recepieValue = comp.recepie;
  }
  
}
