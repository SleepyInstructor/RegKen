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

  constructor(private partiInfo: ParticipantInfo ) {

  }

  ngOnInit() {
  }
  
  addParticipant(): void {
      let newPart : Participant = new Participant( defaultName,this.partiInfo.plist.length.toString() );
      this.partiInfo.plist.push(newPart);
      this.partiInfo.currentParticipant = newPart;
  }
  select(currentParticipant : any) : void {
      this.partiInfo.currentParticipant = currentParticipant;   
  }
}
