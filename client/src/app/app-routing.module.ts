import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';



//import { AuthenticationService } from './providers/authentication.service';
import { AuthGuard } from './providers/auth.guard';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentdetailsComponent } from './equipmentdetails/equipmentdetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewequipmentComponent } from './newequipment/newequipment.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';




const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] },
  {
    path: 'equipment',
    component: EquipmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'equipment/:id',
    component: EquipmentdetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'equipment/:id',
    component: NewequipmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'alert',
    component: AlertComponent,

  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  }

  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  LogoutComponent,
  GalleryComponent,
  EquipmentComponent,
  EquipmentdetailsComponent,
  NewequipmentComponent,
  AboutComponent,
  ContactComponent,
  NavbarComponent,
  AppComponent
  //   PageNotFoundComponent
]


