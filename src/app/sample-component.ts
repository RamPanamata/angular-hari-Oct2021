import { Component, Input } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'sample',
  templateUrl: './sample.component.html',
})

export class SampleComponent {
  constructor(public employeeService:EmployeeService){}
  name = 'Sample Html';
  @Input() myInput;

  changeName() {
    this.myInput.name = this.myInput.name + ' R';
  }
}