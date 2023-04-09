import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import {MessageService} from 'primeng/api';
import { __values } from 'tslib';
import { ValidatorServicesService } from 'src/app/services/validator-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BRANDS } from 'src/app/interfaces/brands.interface';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [MessageService]
})
export class FormComponent implements OnInit  {

  public brands!: BRANDS[];
  // cities!: any;
  public myForm!: FormGroup;
  public plate: string = ''
  public id: any;


  constructor(private fb: FormBuilder, private dataService: DataService, private messageService: MessageService, private plateValidator: ValidatorServicesService, private activatedRoute: ActivatedRoute, private router: Router) {this.obtenerParametroUrl()}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({ id }) => this.id = id) // Tomar el ID del cliente

    this.dataService.getBrandVehicles().subscribe((resp: BRANDS[]) => {
      this.brands = resp
    })

    this.myForm = this.fb.group({
      name           : ['', [Validators.required,  Validators.maxLength(50)]],
      documentType   : ['', [Validators.required]],
      numberDocument : [  , [Validators.required]],
      address        : ['', [Validators.required,  Validators.maxLength(50)]],
      phone          : ['', [Validators.required]],
      vehicle        : ['', [Validators.required, Validators.maxLength(20)]],
      vehicleBrand   : ['', [Validators.required]],
      plate          : [''.toUpperCase(), [Validators.required, Validators.minLength(6), Validators.maxLength(6)], [this.plateValidator ]]
    })

  }


  obtenerParametroUrl() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.id= params.get('id');
      if (this.id) {
        this.dataService.getClientPlate(this.id).subscribe((res: any) => {
           this.myForm.patchValue({
             name: res[0]?.name,
             documentType: res[0]?.documentType,
             phone: res[0]?.phone,
             vehicle: res[0]?.vehicle,
             numberDocument: res[0]?.numberDocument,
             address: res[0]?.address,
             vehicleBrand: res[0]?.vehicleBrand,
             plate: res[0]?.plate
           });
        });
      }
    });
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
    // let placa: string = this.myForm.get('plate')?.value.toUpperCase()
    // this.dataService.getPlate(placa).subscribe((resp) => {
    //   this.plate = resp[0]?.plate
    // });

     const form = [{
       name             : this.myForm.get('name')?.value,
       documentType     : this.myForm.get('documentType')?.value,
       numberDocument   : this.myForm.get('numberDocument')?.value,
       address          : this.myForm.get('address')?.value,
       phone            : this.myForm.get('phone')?.value,
       vehicle          : this.myForm.get('vehicle')?.value,
       vehicleBrand     : this.myForm.get('vehicleBrand')?.value,
       plate            : this.myForm.get('plate')?.value.toUpperCase()
     }];

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    }else if(!this.id) {
      this.dataService.createClient(form).subscribe()
      this.messageService.add({severity:'success', summary: 'Enviado', detail: 'Cliente creado satisfactoriamente'});
      this.myForm.reset()
      }else{
        let editForm = this.myForm.value
        this.dataService.editClientDocument(this.id, editForm).subscribe();
        this.router.navigate(['/']);
      }


  }

}
