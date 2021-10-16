import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export class DependentService {

  constructor() { }
getEmployees() {
    let emps = [
      { id: 1, name: 'Settha' },
      { id: 2, name: 'Tulasi' },
      { id: 3, name: 'Priyank' },
      { id: 4, name: 'Ram' },
      { id: 5, name: 'Rajesh' },
      { id: 6, name: 'Sai' }
    ];
    return of(emps);
  }
}