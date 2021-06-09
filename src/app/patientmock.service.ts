import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

export abstract class PatientListService {
  abstract getPatientInfo(id: string): Observable<any>;

  /**
   * Returns all patients from the hospital
   */
  abstract getPatientList(): Observable<any>;
  /**
   * Get all informations from the patient e.g. firstName, LastName, Birtheday
   * @param id:string id from patient
   */
  abstract getPatientById(id: string): Observable<any>;
  /**
   * get the complete Medication history from a patient
   * @param id:string id from the patient
   */
  abstract getMedicationByPatientId(patientId: string): Observable<any>;
}

@Injectable()
export class PatientmockService extends PatientListService {
  constructor(private http: HttpClient) {
    super();
  }

  getPatientInfo(id: string): Observable<any> {
    return this.http
      .get('assets/patient.json')
      .pipe(map((res: any[]) => res.find(item => item.id === id)));
  }
  getPatientList(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  getPatientById(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  getMedicationByPatientId(patientId: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
