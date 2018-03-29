import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ParticipantInfo } from './parti-info.service';
import { DojoRepresentativeComponent } from './dojo-representative/dojo-representative.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { RegkenconfigService } from './regkenconfig.service';
import { ParticipantFormComponent } from './participant-form/participant-form.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './/app-routing.module';
import { DatabaseService } from './database.service';
import { ManagementComponent } from './management/management.component';

@NgModule({
  declarations: [
    AppComponent,
    DojoRepresentativeComponent,
    ParticipantListComponent,
    ParticipantFormComponent,
    RegistrationComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RegkenconfigService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
