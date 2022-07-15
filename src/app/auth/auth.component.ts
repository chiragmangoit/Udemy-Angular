import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  @ViewChild('form') myForm: NgForm;
  register: boolean = false;
  isLoading: boolean = false;
  error: string = null;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onRegister() {
    this.register = !this.register;
  }

  onSubmit() {
    let authObs: Observable<authResponseData>;

    if (!this.myForm.valid) {
      return;
    }
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;
    this.isLoading = true;

    if (this.register) {
      authObs = this.authService.signIn(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
      (response) => {
        this.isLoading = false;
        this.router.navigate(['/recepies'])
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    this.myForm.reset();
  }
}
