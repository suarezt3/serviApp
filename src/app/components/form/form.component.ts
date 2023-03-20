import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import {MessageService} from 'primeng/api';
import { __values } from 'tslib';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [MessageService]
})
export class FormComponent implements OnInit  {

  public brands: any = []

 public myForm!: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService, private messageService: MessageService) {}

  ngOnInit(): void {

    this.dataService.getBrandVehicles().subscribe((resp) => {
      this.brands = resp
    })

    this.myForm = this.fb.group({
      name           : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      documentType   : ['', [Validators.required]],
      numberDocument : [  , [Validators.required]],
      address        : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      phone          : ['', [Validators.required]],
      vehicle        : ['', [Validators.required, Validators.maxLength(20)]],
      vehicleBrand   : ['', [Validators.required]],
      plate          : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
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
   //console.log("NUMERO", this.myForm.controls['numberDocument'].value );
    let dataForm: {}
    dataForm = this.myForm.value
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    }else {
      this.dataService.createClient(dataForm).subscribe()
      this.messageService.add({severity:'success', summary: 'Enviado', detail: 'Cliente creado satisfactoriamente'});
      this.myForm.reset()
    }

  }



}
