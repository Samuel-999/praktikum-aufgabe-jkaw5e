import { Component, OnInit } from '@angular/core';
import { Patients } from '../interfaces/patientinterface';
import { PatientListService } from '../patientmock.service';


@Component({
  selector: 'app-patienten-module',
  templateUrl: './patienten-module.component.html',
  styleUrls: ['./patienten-module.component.css']
})
export class PatientenModuleComponent implements OnInit {

  patientData: Patients;


  constructor(private patientservice: PatientListService) {
    patientservice.getPatientInfo("1").subscribe(result => {this.patientData = result})
  }

  ngOnInit() {
  }
}