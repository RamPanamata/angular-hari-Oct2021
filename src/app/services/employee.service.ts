import { Injectable } from '@angular/core';
import {DependentService} from './dependent.service'

@Injectable()
export class EmployeeService {

  constructor(public dependentService: DependentService) { }

myEmployees() {
    return this.dependentService.getEmployees();
  }
}