import { Component, OnInit } from '@angular/core';
import {PartSearchService  } from '../service/partSearch.service';

@Component({
  selector: 'app-partsearch',
  templateUrl: './partsearch.component.html',
  styleUrls: ['./partsearch.component.css']
})
export class PartsearchComponent implements OnInit {

  constructor(private partSearchService: PartSearchService) {}

  ngOnInit() {
  }
  Departments = [
    { id: 1, value: "dep 1" },
    { id: 2, value: "dep 2" },
    { id: 3, value: "dep 3" }
  ];

  onClear() {
    // this.employeeService.initializeFormGroup();
    // this.employeeService.employeeDetailsForm.reset();
  }
}
