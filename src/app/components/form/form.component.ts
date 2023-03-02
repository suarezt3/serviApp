import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit  {

  myForms!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.myForms = this.fb.group({
      name           : [''],
      documentType   : [''],
      numberDocument : [''],
      address        : [''],
      phone          : [''],
      vehicleType    : [''],
      vehicleBrand   : [''],
      plate          : [''],
      workDetail     : [''],
      lastJob        : ['']
    })

  }

}
