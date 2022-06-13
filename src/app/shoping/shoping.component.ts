import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping',
  templateUrl: './shoping.component.html',
  styleUrls: ['./shoping.component.css']
})
export class ShopingComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient('Tomato',5),
    new Ingredient('Capsicum',1),
  ];

  constructor() { }

  ngOnInit() {
  }

  pushIngredient(ing:Ingredient) {
    this.ingredients.push(ing);
  }

}
