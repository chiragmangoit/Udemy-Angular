import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopingComponent } from './shoping/shoping.component';
import { ShoppingListComponent } from './shoping/shopping-list/shopping-list.component';
import { RecepieComponent } from './recepie/recepie.component';
import { RecepieListComponent } from './recepie/recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepie/recepie-list/recepie-item/recepie-item.component';
import { RecepieDetailsComponent } from './recepie/recepie-details/recepie-details.component';
import { AppRoutingModule } from './app-routing.module';
import { RecepieStartComponent } from './recepie/recepie-start/recepie-start.component';
import { RecepieEditComponent } from './recepie/recepie-edit/recepie-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [			
    AppComponent,
    HeaderComponent,
    ShopingComponent,
    ShoppingListComponent,
    RecepieComponent,
    RecepieListComponent,
    RecepieItemComponent,
    RecepieDetailsComponent,
    RecepieStartComponent,
    RecepieEditComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
