import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/services/data.service';
import { Client } from 'src/interfaces/clients.interface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public data!: Client[]


  constructor(private clienteService: DataService) { }


  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((resp) => {
      this.data = resp
    });

  }


}
