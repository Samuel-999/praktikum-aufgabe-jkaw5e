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
var coll = document.getElementsByClassName("more");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var normal = this.nextElementSibling;
    if (normal.style.display === "block") {
      normal.style.display = "none";
    } else {
      normal.style.display = "block";
    }
  });
}