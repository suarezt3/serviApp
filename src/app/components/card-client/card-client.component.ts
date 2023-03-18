import { Component, OnInit } from '@angular/core';
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

  public client!: any;
  public id = ""


  constructor(private clienteService: DataService, private activatedRoute: ActivatedRoute) {}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
     switchMap( ({ id }) =>  this.clienteService.getClientDocument(id) ))
    .subscribe( (client) => {
       this.client = client;
    } );
  }

 public displayBasic2!: boolean;


  showBasicDialog2() {
    this.displayBasic2 = true;
}


}
