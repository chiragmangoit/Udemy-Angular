import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Recepie } from '../recepie/recepie.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RecepieService } from './recepie.service';

@Injectable({
  providedIn: 'root',
})
export class RecepieResolverService implements Resolve<Recepie[]> {
  constructor(private dataStorage: DataStorageService, private recepiesService:RecepieService ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recepie[] | Observable<Recepie[]> | Promise<Recepie[]> {
    
    // return this.dataStorage.fetchRecepie();
    const recepies = this.recepiesService.getRecepies();
    if ( recepies.length === 0) {
      return this.dataStorage.fetchRecepie();
    }
  }
}
