import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecepieDetailsComponent } from './recepie/recepie-details/recepie-details.component';
import { RecepieEditComponent } from './recepie/recepie-edit/recepie-edit.component';
import { RecepieStartComponent } from './recepie/recepie-start/recepie-start.component';
import { RecepieComponent } from './recepie/recepie.component';
import { RecepieResolverService } from './services/recepie-resolver.service';
import { ShopingComponent } from './shoping/shoping.component';
import { ShoppingListComponent } from './shoping/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recepies', pathMatch: 'full' },
  {
    path: 'recepies',
    component: RecepieComponent,
    children: [
      {
        path: '',
        component: RecepieStartComponent,
        resolve: [RecepieResolverService],
      },
      { path: 'new', component: RecepieEditComponent },
      {
        path: ':id',
        component: RecepieDetailsComponent,
        resolve: [RecepieResolverService],
      },
      {
        path: ':id/edit',
        component: RecepieEditComponent,
        resolve: [RecepieResolverService],
      },
    ],
  },
  { path: 'shopping', component: ShopingComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
