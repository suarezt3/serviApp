import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { MessageService } from 'primeng/api';

import { switchMap} from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.css'],
  providers: [MessageService]
})
export class CardClientComponent implements OnInit {

  public client        : any = [] || undefined;
  public jobs!         : any | undefined;
  public id = "";
  public myForm!       : FormGroup;
  public displayBasic2!: boolean;
  public vehicle!: string | null;
  public vehicleBrand!: string | null;

  public days: any = [];
  public months: any = [];
  public years: any = [];



  constructor(private fb: FormBuilder, private dataService: DataService, private activatedRoute: ActivatedRoute, private messageService: MessageService) {}


  ngOnInit(): void {


    this.dataService.getDays().subscribe((day) => {
         this.days = day
       });
    this.dataService.getMonths().subscribe((month) => {
        this.months = month
       });
    this.dataService.getYears().subscribe((year) => {
         this.years = year
       });




    /**
     * Id del cliente
     */
    this.activatedRoute.params.subscribe(({id}) => this.id = id)
    /**
     * Enviar el id para cargar la data de un cliente individual
     */
    this.activatedRoute.params
    .pipe(
     switchMap( ({ id }) =>  this.dataService.getClientDocument(id) ))
    .subscribe( (client: any) => {
       this.client = client[0];
       this.vehicle = client[0]?.vehicle
       this.vehicleBrand = client[0]?.vehicleBrand
    });


   /**
     * Metodo para obtener los trabajos de cada cliente
     */
   this.activatedRoute.params
   .pipe(
    switchMap( ({ id }) =>  this.dataService.getJobsClients(id) ))
   .subscribe( (jobs) => {
      this.jobs = jobs;
   });


    /**
     * Formulario para crear los trabajos del cliente
     */
    this.myForm = this.fb.group({
      day: ['', [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]],
      price: ['', [Validators.required]],
      numberOrder: ['', [Validators.required]],
      description: ['', [Validators.required]],
      user: [this.id, [Validators.required]],
      vehicle: [],
      vehicleBrand: []
    })



  }

  invalidField( field: string ) {
    return this.myForm.get(field)?.invalid
            && this.myForm.get(field)?.touched;
  }


  submit(): void {
    this.myForm.get('vehicle')?.setValue(this.vehicle)
    this.myForm.get('vehicleBrand')?.setValue(this.vehicleBrand)
      let dataForm: {}
      dataForm = this.myForm.value
      if(this.myForm.invalid) {
        this.myForm.markAllAsTouched();
      }else {
        this.dataService.createJobs(dataForm).subscribe()
        this.myForm.reset();
        window.location.reload()
        this.messageService.add({severity:'success', summary: 'Enviado', detail: 'Trabajo registrado con exito'});
      }
  }

  cancel() {
    this.myForm.reset()
  }

  showBasicDialog() {
    this.displayBasic2 = true;
}


}
