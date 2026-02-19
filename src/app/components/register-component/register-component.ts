import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router, RouterLink } from '@angular/router';
import { Registered } from '../../types/user';

@Component({
  selector: 'app-register-component',
  imports: [FormsModule, RouterLink],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {
  
  user: Registered = {
    username: '',
    email: '',
    password: '',
  };
  private readonly authService:Auth = inject(Auth)
  private readonly router = inject(Router);

  
  onSubmit(registerForm: any) {
    if (registerForm.valid) {
      this.authService.register(this.user);
      console.log('Inscription réussie');
      this.router.navigate(['/login']);
    }
  }

}
