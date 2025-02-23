import { AuthService } from './../../auth/auth.service';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  AuthService = inject(AuthService);
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  onSubmit(event: Event) {
    console.log(this.form.value);
    if (this.form.valid) {
      //@ts-ignore
      this.AuthService.login(this.form.value).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
