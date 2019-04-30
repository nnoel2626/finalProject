import { Component } from '@angular/core';
import { Router } from '@angular/router';

//import { AuthenticationService } from './providers/authentication.service';
import { User } from './models/user';
//import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'RentalShop';
  currentUser: User;

  constructor() { }

}
