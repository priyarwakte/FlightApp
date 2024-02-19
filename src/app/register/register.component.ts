import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      this.authService.signUp(this.email, this.password).then(() => {
        console.log('Registration successful');
        this.router.navigate(['/login']);
      }).catch(error => {
        console.error('Registration error:', error);
        this.errorMessage = 'Registration failed. Please check your credentials and try again.';
      });
    }
  }
}
