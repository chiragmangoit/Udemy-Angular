import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelector = new EventEmitter<string>();

  constructor() { }

  onSelect( feature:string ) {
    this.featureSelector.emit(feature);
  }

  ngOnInit() {
  }

}
