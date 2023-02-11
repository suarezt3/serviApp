import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  public data: any = []


  constructor(private clienteService: DataService) { }


  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((resp) => {
      console.log("DATA", resp);
      this.data = resp

    });
  }


}
