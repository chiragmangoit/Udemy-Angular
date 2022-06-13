import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopingComponent } from './shoping/shoping.component';
import { ShoppingListComponent } from './shoping/shopping-list/shopping-list.component';
import { RecepieComponent } from './recepie/recepie.component';
import { RecepieListComponent } from './recepie/recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepie/recepie-list/recepie-item/recepie-item.component';
import { RecepieDetailsComponent } from './recepie/recepie-details/recepie-details.component';

@NgModule({
  declarations: [			
    AppComponent,
    HeaderComponent,
    ShopingComponent,
    ShoppingListComponent,
    RecepieComponent,
    RecepieListComponent,
    RecepieItemComponent,
    RecepieDetailsComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
