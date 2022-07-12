import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  @ViewChild('form') slform: NgForm;
  private subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingServices: ShoppingService) {}

  ngOnInit() {
    this.subscription = this.shoppingServices.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingServices.getIngredient(index);
        this.slform.setValue({
          ingName: this.editedItem.name,
          ingAmount: this.editedItem.amount,
        });
      }
    );
  }

  getIngredients(form: NgForm) {
    const value = form.value;
    const newIng = new Ingredient(value.ingName, value.ingAmount);
    if (this.editMode === true) {
      this.shoppingServices.updateIngredients(this.editedItemIndex, newIng);
    } else {
      this.shoppingServices.addIngredients(newIng);
    }
    this.editMode = false;
    form.reset();
  }

  onClearForm() {
    this.slform.reset(); 
    this.editMode = false;
  }

  onClickDelete() {
    if (this.editMode === true) {
      this.shoppingServices.deleteIngredients(this.editedItemIndex);
    }
    this.onClearForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
