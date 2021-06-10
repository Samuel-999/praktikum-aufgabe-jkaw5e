import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PatientmockService, PatientListService } from './patientmock.service';
import { HttpClientModule } from '@angular/common/http';
import { FalleigenschaftenComponent } from './falleigenschaften/falleigenschaften.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWrench } from '@fortawesome/free-solid-svg-icons/faWrench';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
import { PatientenComponent } from './patienten/patienten.component';

library.add(faWrench);
library.add(faCoffee);

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, FontAwesomeModule],
  declarations: [AppComponent, HelloComponent, FalleigenschaftenComponent, PatientenComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: PatientListService, useClass: PatientmockService }]
})
export class AppModule {}
