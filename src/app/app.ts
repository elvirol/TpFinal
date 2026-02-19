import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TpFinal');
  authService:Auth = inject(Auth)

  isLoggedIn = this.authService.isAuthenticated;
  currentUser = this.authService.currentUser;
  logout(){
    this.authService.logout();
  }
}
