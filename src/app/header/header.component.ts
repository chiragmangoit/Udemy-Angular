import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  userSubs:Subscription;
  isAuthenticated: boolean = false;
  constructor(private dataService:DataStorageService, private authService:AuthService ) { }


  ngOnInit() {
    this.userSubs = this.authService.user.subscribe( user => {
      this.isAuthenticated = !!user
    });
  }

  onSaveData() {
    this.dataService.storeRecepie();
  }

  onFetchData() {
    this.dataService.fetchRecepie().subscribe();
  }

  onLogout() {
    this.authService.logOut();
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }
}
