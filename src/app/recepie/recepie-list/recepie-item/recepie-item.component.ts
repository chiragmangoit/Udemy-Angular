import { Component, OnInit, Input , Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Input() recepies;
  @Output() showDescription = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }
  onClickDesc(desc:string) {
    this.showDescription.emit(desc);
  }

}
