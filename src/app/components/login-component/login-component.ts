import { Component, inject, NgModule } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { User } from '../../types/user';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule, RouterLink],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  private readonly authService = inject(Auth);
  private readonly router = inject(Router);

  user: User = {
    username: '',
    password: '',
  };

  onSubmit(loginForm: any) {

    if (loginForm.valid && this.user.username && this.user.password) {
      if (
        this.authService.validateCredentials(
          this.user.username,
          this.user.password
        )
      ) {
        this.authService.login(this.user.username, this.user.password);
        console.log('Connexion réussie');
        this.router.navigate(['/home']);
      } else {
        console.error('Identifiants incorrects');
      }
    }
  }

}
