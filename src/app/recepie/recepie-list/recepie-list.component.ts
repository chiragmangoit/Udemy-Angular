import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  @Output() descValue = new EventEmitter<{value:string,recepie:{}}>();

  recepies:Recepie[] = [
    new Recepie('Soups','Healthy Food-items','https://www.simplyrecipes.com/thmb/aeZviNZyDq1pUtzjBlUSvE6rylk=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__04__Easy-Carrot-Soup-Hero-2-f1ff4bb68a62480c908b279a641eba39.jpg'),
    new Recepie('Veg Curry','Healthy Food-items','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574'),
    new Recepie('Indian Dal','Healthy Food-items','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
    new Recepie('Tofu Tikka Masala','Healthy Food-items','https://www.thespruceeats.com/thmb/cO72JFFH0TCAufENSxUfqE8TmKw=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg')
  ];

  constructor() { }

  showDesc(value:string,recepie:{}){
    this.descValue.emit({value,recepie});
  }

  ngOnInit() {
  }

}
