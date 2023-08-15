import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { MessageService } from 'primeng/api';

import { count, switchMap} from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.css'],
  providers: [MessageService]
})
export class CardClientComponent implements OnInit {


  public sidebarVisible!: boolean;
  public client        : any = [] || undefined;
  public jobs!         : any | undefined;
  public FiltersJobs!         : any | undefined;
  public id = "";
  public myForm!       : FormGroup;
  public displayBasic2!: boolean;
  public vehicle!: string | null;
  public vehicleBrand!: string | null;
  public plate!: string | null;
  public numberDocument!: number | null;
  public name!: string | null;
  public countJobs: any = 0;
  public typeJobs: any[] = []
  public limitNumber: string  = "^([0-9]+)$"



  constructor(private fb: FormBuilder, private dataService: DataService, private activatedRoute: ActivatedRoute, private messageService: MessageService) {}


  ngOnInit(): void {

    /**
     * Traer los tipos de trabajos
     */
    this.dataService.getTypeJobs().subscribe((resp: any) => {
      this.typeJobs = resp
    })



    /**
     * Id del cliente
     */
    this.activatedRoute.params.subscribe(({id}) => this.id = id)

    /**
     * Enviar el id para cargar la data de un cliente individual
     */
    this.activatedRoute.params
    .pipe(
     switchMap( ({ id }) =>  this.dataService.getClientPlate(id) ))
    .subscribe( (client: any) => {
       this.client = client[0];
       this.vehicle = client[0]?.vehicle
       this.vehicleBrand = client[0]?.vehicleBrand
       this.plate = client[0]?.plate,
       this.numberDocument = client[0]?.numberDocument
       this.name = client[0]?.name
    });


   /**
     * Metodo para obtener los trabajos de cada cliente
     */
    this.activatedRoute.params
    .pipe(
     switchMap( ({ id }) =>  this.dataService.getJobsClients(id) ))
    .subscribe( (jobs) => {
       this.jobs = jobs;
       this.countJobs = this.jobs.length
        let filterJobs = this.jobs.reverse().filter((objeto: any, indice:any, self: any) =>
                    indice === self.findIndex((t: any) => t.plate === objeto.plate && t.typeJobs === objeto.typeJobs)
                   );
                     this.FiltersJobs = filterJobs
    });

    /**
     * Formulario para crear los trabajos del cliente
     */
    this.myForm = this.fb.group({
      typeJobs: ['', [Validators.required]],
      date: ['', [Validators.required]],
      nextDate: [''],
      price: ['', [Validators.required, Validators.pattern(this.limitNumber)]],
      numberOrder: ['', [Validators.required,  Validators.pattern(this.limitNumber)]],
      description: ['', [Validators.required]],
      user: [''],
      vehicle: [''],
      vehicleBrand: [''],
      plate: [''],
      name: ['']
    })



  }


  deleteOrder(order: number) {
    this.dataService.deleteJobs(order).subscribe()
    this.messageService.add({severity:'error', summary: 'Eliminado', detail: 'Trabajo eliminado con exito'});
     setTimeout(() => {
      window.location.reload()
    }, 2000);

  }


  invalidField( field: string ) {
    return this.myForm.get(field)?.invalid
            && this.myForm.get(field)?.touched;
  }


  submit() {
     this.myForm.get('vehicle')?.setValue(this.vehicle)
     this.myForm.get('vehicleBrand')?.setValue(this.vehicleBrand)
     this.myForm.get('plate')?.setValue(this.plate)
     this.myForm.get('user')?.setValue(this.numberDocument)
     this.myForm.get('name')?.setValue(this.name)
     let dataForm: {}
     dataForm = this.myForm.value
     this.dataService.createJobs(dataForm).subscribe()
     this.messageService.add({severity:'success', summary: 'Enviado', detail: 'Trabajo registrado con exito'});
     setTimeout(() => {
      window.location.reload()
    }, 2000);
     this.activatedRoute.params
        .pipe(
         switchMap( ({ id }) =>  this.dataService.getJobsClients(id) ))
        .subscribe( (jobs) => {
           this.jobs = jobs;
          });
        this.myForm.reset()
        return this.jobs
  }

  cancel() {
    this.myForm.reset()
  }

  showBasicDialog() {
    this.displayBasic2 = true;
}



}
