import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/services/data.service';
import { Client } from 'src/interfaces/clients.interface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public data!: Client[];
  first = 0;
  rows = 10;


  constructor(private clienteService: DataService) { }


  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((resp) => {
      this.data = resp
    });

  }


next() {
    this.first = this.first + this.rows;
}
prev() {
    this.first = this.first - this.rows;
}
reset() {
    this.first = 0;
}
isLastPage(): boolean {
    return this.data ? this.first === (this.data.length - this.rows): true;
}
isFirstPage(): boolean {
    return this.data ? this.first === 0 : true;
}


}
