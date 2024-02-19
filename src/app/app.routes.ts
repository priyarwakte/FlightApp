// app.routes.ts
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FlightDetailsFormComponent } from './flight-details-form/flight-details-form.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
export const routes: Routes = [
   { path: 'register', component: RegisterComponent },
   { path: 'flight-details', component: FlightDetailsFormComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent},
   { path: '', redirectTo: '/register', pathMatch: 'full' },
];
