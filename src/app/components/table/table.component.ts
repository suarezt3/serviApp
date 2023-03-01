import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public data: any = []


  constructor(private clienteService: DataService) { }


  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((resp) => {
      console.log("DATA", resp);
      this.data = resp

    });
  }


}
