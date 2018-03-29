import { Component } from '@angular/core';
import {ParticipantInfo} from './parti-info.service';
import {RegkenconfigService} from './regkenconfig.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title : String;
  constructor( private config: RegkenconfigService){
     this.title = config.title;
  };
}
