import { Component, OnInit } from '@angular/core';
import { ParticipantInfo } from '../parti-info.service';
import { Participant } from '../participant.class';

const defaultName:String = "Participant";

@Component({
  selector: 'participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})

export class ParticipantListComponent implements OnInit {

  testlist: Array<Participant> = [];
  constructor() {

  }

  ngOnInit() {
  }
  
  addParticipant(): void {
      this.testlist.push(new Participant( defaultName,this.testlist.length.toString() ));
  }

}
