import { Injectable } from '@angular/core';
import { Participant, DojoRep } from './participant.class';
@Injectable()
export class ParticipantInfo {

  //participant list
  plist: Array<Participant>;
  currentParticipant : Participant;
  rep : DojoRep;
    constructor() {
      this.plist = new Array<Participant>();
      this.currentParticipant = null;
      this.rep = new DojoRep("Rep", "e","","");
    }
  public title() : String {

  return "Service is working"
}

}
