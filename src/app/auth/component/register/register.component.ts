import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  templateUrl: './register.component.html',
})

export class RegisterComponent implements OnInit {
  returnUrl: string;
  registerForm: FormGroup;

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

    this.createRegisterForm();
  }

  // Register form
  createRegisterForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      matchingPassword: this.fb.group({
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required]
      }, {validator: this.passwordValidator})
    });
  }

  get firstName() { return this.registerForm.get('firstName'); }

  get lastName() { return this.registerForm.get('lastName'); }

  get email() { return this.registerForm.get('email'); }

  get matchingPassword() { return this.registerForm.get('matchingPassword'); }

  passwordValidator(g: FormGroup) {
    if (g.get('password').value.length < 3) return {'invalid': true};

    return g.get('password').value === g.get('passwordConfirm').value ? null : {'mismatch': true};
  }

  register() {
    const formModel = this.registerForm.value;
    const user: User = {
      _id: null,
      email: formModel.email,
      password: formModel.matchingPassword.password,
      firstName: formModel.firstName,
      lastName: formModel.lastName,
      avatar: null,
      token: null,
    };

    this.authenticationService.register(user).subscribe(
      (data) => {
        this.router.navigate([this.returnUrl]);
      },
      (error) => {
        console.log(error);
      });
  }

}
