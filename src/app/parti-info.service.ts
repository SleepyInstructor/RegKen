import { Injectable } from '@angular/core';
import { Participant } from './participant.class';
@Injectable()
export class ParticipantInfo {

  //participant list
  plist: Array<Participant>;
  currentParticipant : Participant;

    constructor() {
      this.plist = new Array<Participant>();
      this.currentParticipant = null;
    }
  public title() : String {

  return "Service is working"
}

}
