import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.css']
})
export class RecepieDetailsComponent implements OnInit {

  @Input() recepieValue;
  constructor() { }

  ngOnInit(): void {
  }

}
