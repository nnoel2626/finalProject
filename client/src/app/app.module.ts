//Angular Module
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AuthenticationService } from './providers/authentication.service';
import { AuthGuard } from './providers/auth.guard';
import { UserService } from './providers/user.service';
import { RentalshopService } from './providers/rentalshop.service';

// used to create fake backend
import { fakeBackendProvider } from './helpers';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';


import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentdetailsComponent } from './equipmentdetails/equipmentdetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewequipmentComponent } from './newequipment/newequipment.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    GalleryComponent,
    EquipmentComponent,
    EquipmentdetailsComponent,
    NavbarComponent,
    NewequipmentComponent,
    ContactComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    BrowserModule, BrowserAnimationsModule, FormsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    RentalshopService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
