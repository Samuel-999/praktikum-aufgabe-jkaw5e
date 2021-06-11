import { Component, OnInit } from '@angular/core';
import { Patients } from '../interfaces/patientinterface';
import { PatientListService } from '../patientmock.service';

@Component({
  selector: 'app-patienten-details',
  templateUrl: './patienten-details.component.html',
  styleUrls: ['./patienten-details.component.css']
})
export class PatientenDetailsComponent implements OnInit {

   patientData: Patients;


  constructor(private patientservice: PatientListService) {
    patientservice.getPatientInfo("1").subscribe(result => {this.patientData = result})
  }

  ngOnInit() {
  }

}
