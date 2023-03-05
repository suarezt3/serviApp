import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { __values } from 'tslib';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit  {

  public brands: any = []

  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private brandService: DataService) {}

  ngOnInit(): void {

    this.brandService.getBrandVehicles().subscribe((resp) => {
      this.brands = resp
    })

    this.myForm = this.fb.group({
      name           : [''],
      documentType   : [''],
      numberDocument : [],
      address        : [''],
      phone          : [''],
      vehicleType    : [''],
      vehicleBrand   : [''],
      plate          : ['']
    })

  }

  save() {

    console.log("Formulario", this.myForm.value);



  }



}
