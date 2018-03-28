import { Component, OnInit } from '@angular/core';
import {ParticipantInfo} from '../parti-info.service';
@Component({
  selector: 'participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.less']
})
export class ParticipantFormComponent implements OnInit {

  constructor(private partiInfo: ParticipantInfo) { }

  ngOnInit() {
  }

  changed(){
    console.log("Stuff happened");
  }
}
 