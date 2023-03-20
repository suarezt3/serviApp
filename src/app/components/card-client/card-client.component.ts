import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { Client } from 'src/interfaces/clients.interface';


@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.css']
})
export class CardClientComponent implements OnInit {

  public client!: any | undefined;
  public id = "";
  public myForm!: FormGroup;
  public displayBasic2!: boolean;


  constructor(private fb: FormBuilder, private clienteService: DataService, private activatedRoute: ActivatedRoute) {}


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
    } );


    /**
     * Formulario para crear los trabajos del cliente
     */
    this.myForm = this.fb.group({
      date: [],
      price: [],
      numberOrder: [],
      description: [],
      user: [this.id]
    })
  }


  submit() {
      console.log("Formulario", this.myForm.value);
      this.clienteService.createJobs(this.myForm.value).subscribe()
  }

  showBasicDialog() {
    this.displayBasic2 = true;
}


}
