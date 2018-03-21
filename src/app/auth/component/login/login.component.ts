import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
  returnUrl: string;
  loginForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.createLoginForm();
  }

  // Login form
  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    const formModel = this.loginForm.value;
    this.authenticationService.login(formModel.email, formModel.password).subscribe((response: ApiResponse) => {
        const user = <User>response.data;
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate([this.returnUrl]);

          return user;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
