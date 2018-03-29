import { Component, OnInit } from '@angular/core';
import { ParticipantInfo } from '../parti-info.service';
import { Participant } from '../participant.class';

const defaultName:String = "Participant";

@Component({
  selector: 'participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.less']
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
  remove(currentParticipant: any) : void {
    console.log("remove")
    let index  = this.partiInfo.plist.indexOf(currentParticipant);
    this.partiInfo.plist.splice(index,1);
    let newLength = this.partiInfo.plist.length;
    if(newLength == 0){
      this.partiInfo.currentParticipant = null;
    } else {
      this.partiInfo.currentParticipant = this.partiInfo.plist[Math.min(index,newLength-1)];
    }
  }
}
