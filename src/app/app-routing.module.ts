import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {ManagementComponent} from './management/management.component';

const routes: Routes = [
  { path: 'reg', component: RegistrationComponent },
  { path: 'mng', component: ManagementComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
