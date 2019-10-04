import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { AccountComponent } from './account/account.component';
import { DonationComponent} from './donation/donation.component';
import { SightingComponent } from './sighting/sighting.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes =
  [
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: LandingComponent },
    { path: 'account', component: AccountComponent },
    { path: 'donation', component: DonationComponent },
    { path: 'sighting', component: SightingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent }
  ]


@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    // { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
