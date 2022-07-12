import { Component, OnInit, Input } from '@angular/core';
import { RecepieService } from 'src/app/services/recepie.service';
import { Recepie } from '../../recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Input() recepies:Recepie;
  @Input() index:number;  
  constructor(private recepieSevice:RecepieService) { }

  ngOnInit() {
  }
  

}
