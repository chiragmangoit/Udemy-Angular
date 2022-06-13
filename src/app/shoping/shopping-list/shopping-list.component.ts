import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Output() setIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  getIngredients( ingName:string,ingAmount:number ) {
    const ing = new Ingredient(ingName,ingAmount);
    this.setIngredient.emit(ing);
  }

}
