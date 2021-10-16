import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ';
  value = "6.0";
  inputToChild = { name: "Ram" };
  sampleToChild = { name: "Change Value" };

  emps: any;

  constructor(public employeeService: EmployeeService) {
    this.employeeService.myEmployees().subscribe(value => {
      this.emps = value;
    });
  }
}
