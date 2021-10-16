import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() childInput: string;

  changeName() {
    this.childInput.name = this.childInput.name + ' 1';
  }

  rates = [{ countryCode: "USD", value: 400 },
  { countryCode: "CAN", value: 500 }]
}