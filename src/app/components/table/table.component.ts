import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterMatchMode, MessageService, SelectItem } from 'primeng/api';
import { DataService } from 'src/app/services/data.service';
import { Client } from 'src/interfaces/clients.interface';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [MessageService]
})
export class TableComponent implements OnInit {

  public data: Client[] = [] || undefined;
  first = 0;
  rows = 10;
  matchModeOptions!: SelectItem[];

  constructor(private clienteService: DataService) { }


  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((resp) => {
      this.data = resp
    });


    this.matchModeOptions = [
      { label: 'Comienza con', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contiene', value: FilterMatchMode.CONTAINS },
    ];


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
