import { Component, OnInit } from '@angular/core';
import {ParticipantInfo} from '../parti-info.service';

@Component({
  selector: 'dojo-representative',
  templateUrl: './dojo-representative.component.html',
  styleUrls: ['./dojo-representative.component.css']
})
export class DojoRepresentativeComponent implements OnInit {

  constructor(private partiInfo: ParticipantInfo ) { }

  ngOnInit() {
  }

}
