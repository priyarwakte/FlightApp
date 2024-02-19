import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { FlightDetailsFormComponent } from './flight-details-form/flight-details-form.component'; 
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    FlightDetailsFormComponent,
    RegisterComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
