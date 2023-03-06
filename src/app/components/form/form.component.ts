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
      name           : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      documentType   : ['', [Validators.required]],
      numberDocument : [  , [Validators.required]],
      address        : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      phone          : ['', [Validators.required]],
      vehicleType    : ['', [Validators.required]],
      vehicleBrand   : ['', [Validators.required]],
      plate          : ['', [Validators.required, Validators.minLength(6)]]
    })

  }

  /**
   *
   * Para validar los campos del formulario
   * @returns
   */
  invalidField( field: string ) {
    return this.myForm.get(field)?.invalid
            && this.myForm.get(field)?.touched;
  }

  save() {

    console.log("Formulario", this.myForm.value);
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    }else {
      this.myForm.reset()
    }



  }



}
