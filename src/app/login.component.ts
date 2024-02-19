import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Adjust the import path as necessary
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService,private router: Router) {}

  onLogin(): void {
    if (this.email && this.password) {
      this.authService.signIn(this.email, this.password)
        .then(() => {
          this.router.navigate(['/flight-details']);
        })
        .catch(error => {
          this.errorMessage = 'Login failed. Please check your credentials and try again.';
        });
    }
  }
}
