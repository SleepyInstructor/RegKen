import { Component, OnInit } from '@angular/core';
import { ParticipantInfo } from '../parti-info.service';
import { RegkenconfigService } from '../regkenconfig.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
  providers: [ParticipantInfo]
})
export class RegistrationComponent implements OnInit {

  title: String;
  constructor(private partiInfo: ParticipantInfo, private config: RegkenconfigService) {
    this.title = config.title;
  };

  ngOnInit() {
  }

}
