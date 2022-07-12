import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingService } from '../services/shopping.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping',
  templateUrl: './shoping.component.html',
  styleUrls: ['./shoping.component.css'],
})
export class ShopingComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingServices: ShoppingService) {}

  ngOnInit() {
    this.ingredients = this.shoppingServices.getIngredients();
    this.subscription = this.shoppingServices.ingredientChanged.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    );
  }
  onEditItem(id:number) {
    this.shoppingServices.startedEditing.next(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

    
}
