import { Component, VERSION } from '@angular/core';
import { PatientListService } from './patientmock.service';

import { faWrench } from '@fortawesome/free-solid-svg-icons/faWrench';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
coffee = faCoffee
  constructor(private patientService: PatientListService) {
    console.log('es geht los');
    patientService.getPatientInfo('1').subscribe(data => {
      console.log(data);
    });
  }
}
