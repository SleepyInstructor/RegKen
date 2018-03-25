import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

  testlist :Array<number> = [ 1, 2, 3 , 4];
  constructor() {
     
   }

  ngOnInit() {
  }

}
