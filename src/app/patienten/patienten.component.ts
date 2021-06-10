import { Component, OnInit } from '@angular/core';
import { Patients } from '../interfaces/patientinterface';
import { PatientListService } from '../patientmock.service';

@Component({
  selector: 'app-patienten',
  templateUrl: './patienten.component.html',
  styleUrls: ['./patienten.component.css']
})
export class PatientenComponent implements OnInit {

  patientData: Patients;


  constructor(private patientservice: PatientListService) {
    patientservice.getPatientInfo("1").subscribe(result => {this.patientData = result})
  }

  ngOnInit() {
  }

}