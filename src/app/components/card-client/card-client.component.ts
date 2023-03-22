import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

import { switchMap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { Client } from 'src/interfaces/clients.interface';


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
  public date!         : Date;
  public es            : any;
  public invalidDates! : Array<Date>



  constructor(private fb: FormBuilder, private clienteService: DataService, private activatedRoute: ActivatedRoute, private messageService: MessageService) {}


  ngOnInit(): void {
    /**
     * Id del cliente
     */
    this.activatedRoute.params.subscribe(({id}) => this.id = id)
    /**
     * Enviar el id para cargar la data de un cliente individual
     */
    this.activatedRoute.params
    .pipe(
     switchMap( ({ id }) =>  this.clienteService.getClientDocument(id) ))
    .subscribe( (client) => {
       this.client = client;
    });


    /**
     * Metodo para obtener los trabajos de cada cliente
     */
    this.activatedRoute.params
    .pipe(
     switchMap( ({ id }) =>  this.clienteService.getJobsClients(id) ))
    .subscribe( (jobs) => {
       this.jobs = jobs;
    });


    /**
     * Formulario para crear los trabajos del cliente
     */
    this.myForm = this.fb.group({
      date: ['', [Validators.required]],
      price: ['', [Validators.required]],
      numberOrder: ['', [Validators.required]],
      description: ['', [Validators.required]],
      user: [this.id, [Validators.required]]
    })

    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }


  let today = new Date();
  let invalidDate = new Date();
  invalidDate.setDate(today.getDate() - 1);
  this.invalidDates = [today,invalidDate];

  }

  invalidField( field: string ) {
    return this.myForm.get(field)?.invalid
            && this.myForm.get(field)?.touched;
  }


  submit() {
      let dataForm: {}
      dataForm = this.myForm.value
      if(this.myForm.invalid) {
        this.myForm.markAllAsTouched();
      }else {
        this.clienteService.createJobs(dataForm).subscribe()
        this.messageService.add({severity:'success', summary: 'Enviado', detail: 'Trabajo registrado con exito'});
        this.myForm.reset()
      }
  }

  cancel() {
    this.myForm.reset()
  }

  showBasicDialog() {
    this.displayBasic2 = true;
}


}
