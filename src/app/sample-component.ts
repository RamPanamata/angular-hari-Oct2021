import { Component, Input } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'sample',
  templateUrl: './sample.component.html',
})

export class SampleComponent {
  constructor(public employeeService:EmployeeService){}
  nameSample = 'Sample Html';
  @Input() myInput;

  changeName() {
    this.myInput.name1 = this.myInput.name1 + ' R';
  }
}