import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-flight-details-form',
  templateUrl: './flight-details-form.component.html',
  styleUrls: ['./flight-details-form.component.css']
})
export class FlightDetailsFormComponent {

  airline: string = '';
  arrivalDate: string = '';
  arrivalTime: string = '';
  flightNumber: string = '';
  numOfGuests: number = 1;
  comments: string = '';
  isSubmitting: boolean = false;
  submitError: string = '';
  submitted: boolean = false;

  constructor(private http: HttpClient,private authService: AuthService,private router: Router) {}

  onSubmit(form: NgForm): void {
    this.isSubmitting = true;
    this.submitted = false;
    this.submitError = '';

    const url = 'https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge';
    const headers = { 
      'Content-Type': 'application/json',
      'token': 'WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh',
      'candidate': 'Priyanka' // Replace 'Your Name' with your actual name or candidate identifier
    };
    const body = {
      airline: this.airline,
      arrivalDate: this.arrivalDate,
      arrivalTime: this.arrivalTime,
      flightNumber: this.flightNumber,
      numOfGuests: this.numOfGuests,
      comments: this.comments
    };
    console.log(body)
    this.http.post(url, body, { headers }).subscribe({
      next: (response) => {
        alert('Submitted, Thank You');
        console.log('Submission successful', response);
        this.submitted = true; // Set to true on successful submission
        // Reset form fields after successful submission
        this.resetForm(form);
      },
      error: (error) => {
        alert('Please check for errors');
        console.error('Submission failed', error);
        this.submitError = 'Failed to submit flight details. Please try again later.';
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }

  logout(): void {
    this.authService.signOut()
      .then(() => {
        console.log('Logged out successfully');
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.error('Logout error:', error);
      });
  }

  resetForm(form: NgForm): void {
    form.resetForm({
      numOfGuests: 1 // Default value
    });
    this.submitted = false;
    this.submitError = '';
  }

}


