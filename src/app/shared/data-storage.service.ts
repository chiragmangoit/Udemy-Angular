import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recepie } from '../recepie/recepie.model';
import { RecepieService } from '../services/recepie.service';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recepieService: RecepieService,
    private authService: AuthService
  ) {}

  storeRecepie() {
    const recepie = this.recepieService.getRecepies();
    this.http
      .put(
        'https://recepie-book-cd2f3-default-rtdb.firebaseio.com/recepies.json',
        recepie
      )
      .subscribe();
  }

  fetchRecepie() {
    return this.http
      .get<Recepie[]>(
        'https://recepie-book-cd2f3-default-rtdb.firebaseio.com/recepies.json'
      )
      .pipe(
        map((recepies) => {
          return recepies.map((recepie) => {
            return {
              ...recepie,
              ingredients: recepie.ingredients ? recepie.ingredients : [],
            };
          });
        }),
        tap((recepies) => {
          this.recepieService.setRecepies(recepies);
        })
      );
  }
}
