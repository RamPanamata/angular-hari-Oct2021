import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SampleComponent } from './sample-component';

import { ChildComponent } from './child/child.component';
import {SharedModule} from './shared/shared.module';

import { EmployeeService } from './services/employee.service';
import { DependentService } from './services/dependent.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule, SharedModule ],
  declarations: [ AppComponent, HelloComponent , SampleComponent, ChildComponent],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService, DependentService]
})
export class AppModule { }
