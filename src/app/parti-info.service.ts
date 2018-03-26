import { Injectable } from '@angular/core';
import { Participant } from './participant.class';
@Injectable()
export class ParticipantInfo {

  //participant list
  plist: Array<string>;
  currentParticipant : Participant;

    constructor() {
      this.plist = new Array<string>();
    }
  public title() : String {

  return "Service is working"
}

}
