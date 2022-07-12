import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Recepie } from '../recepie/recepie.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root',
})
export class RecepieService {
  recepiesChanged = new Subject<Recepie[]>();
  // private recepies: Recepie[] = [
  //   new Recepie(
  //     'Soups',
  //     'Healthy Food-items',
  //     'https://www.simplyrecipes.com/thmb/aeZviNZyDq1pUtzjBlUSvE6rylk=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__04__Easy-Carrot-Soup-Hero-2-f1ff4bb68a62480c908b279a641eba39.jpg',
  //     [
  //       new Ingredient('mirch',3),
  //       new Ingredient('garlic',2)
  //     ]
  //   ),
  //   new Recepie(
  //     'Veg Curry',
  //     'Healthy Food-items',
  //     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
  //     [
  //       new Ingredient('mirch',3),
  //       new Ingredient('garlic',3)
  //     ]
  //   ),
  //   new Recepie(
  //     'Indian Dal',
  //     'Healthy Food-items',
  //     'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
  //     [
  //       new Ingredient('mirch',3),
  //       new Ingredient('garlic',3)
  //     ]
  //   ),
  //   new Recepie(
  //     'Tofu Tikka Masala',
  //     'Healthy Food-items',
  //     'https://www.thespruceeats.com/thmb/cO72JFFH0TCAufENSxUfqE8TmKw=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg',
  //     [
  //       new Ingredient('Shimle mirch',3),
  //       new Ingredient('Tofu',3)
  //     ]
  //   ),
  // ];

  private recepies:Recepie[] = [];
  
  constructor(private shopingService:ShoppingService) {}

  setRecepies(newRecepies:Recepie[]) {
    this.recepies = newRecepies;
    this.recepiesChanged.next(this.recepies.slice());
  }

  getRecepies() {
    return this.recepies.slice();
  }

  getRecepie(index:number) {
    return this.recepies[index];
  }

  addIngredientsToShopingList(ing:Ingredient[]) {
    this.shopingService.addIngredientsToSl(ing);
  }

  addRecepie(recepie:Recepie) {
    this.recepies.push(recepie);
    this.recepiesChanged.next(this.recepies.slice());
  }

  updateRecepie(index:number, newRecepie:Recepie) {
    this.recepies[index] = newRecepie;
    this.recepiesChanged.next(this.recepies.slice());
  }

  deleteRecepie(index:number) {
    this.recepies.splice(index, 1);
    this.recepiesChanged.next(this.recepies.slice());
  }
}
