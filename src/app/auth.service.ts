import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {} // Injecting Auth service from AngularFire

  // Sign up a new user
  async signUp(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Sign in an existing user
   async signIn(email: string, password: string): Promise<UserCredential> {
     return signInWithEmailAndPassword(this.auth, email, password);
   }
  

  // Sign out the current user
  async signOut(): Promise<void> {
    return signOut(this.auth);
  }

  // Example of getting the current user
  getCurrentUser() {
    return this.auth.currentUser; // This is synchronous
  }

  // Subscribe to auth state changes
  getAuthState(): Observable<User | null> {
    return new Observable((subscriber) => {
      const unsubscribe = this.auth.onAuthStateChanged(
        (user) => {
          subscriber.next(user);
        },
        (error) => {
          subscriber.error(error);
        },
        () => {
          subscriber.complete();
        }
      );

      // Return the unsubscribe function
      return { unsubscribe };
    });
  }
}
