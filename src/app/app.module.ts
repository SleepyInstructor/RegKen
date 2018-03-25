import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParticipantInfo} from './parti-info.service';
import { DojoRepresentativeComponent } from './dojo-representative/dojo-representative.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { RegkenconfigService} from './regkenconfig.service';

@NgModule({
  declarations: [
    AppComponent,
    DojoRepresentativeComponent,
    ParticipantListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ParticipantInfo, RegkenconfigService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
