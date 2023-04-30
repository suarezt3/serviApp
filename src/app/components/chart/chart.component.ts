import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JOB } from 'src/app/interfaces/jobs.interface';
import { FilterMatchMode, MessageService, SelectItem } from 'primeng/api';
import { ChartsService } from 'src/app/services/charts.service';
import { DataService } from 'src/app/services/data.service';
import * as moment from 'moment';

moment.locale("es");

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [MessageService]
})
export class ChartComponent implements OnInit {

  public jobs!: JOB[];
  public myForm! : FormGroup

  first = 0;
  rows = 10;
  matchModeOptions!: SelectItem[];


  constructor(private fb: FormBuilder, private dataService: DataService, private chartService: ChartsService){}



    ngOnInit() {


      this.chartService.getJobs().subscribe((resp: any) => {
        /**
         * Funcion para eliminar clientes duplicados y dejar al cliente solo con le ultimo trabajo realizado
         */
             let filterJobs = resp.reverse().filter((objeto: any, indice:any, self: any) =>
                   indice === self.findIndex((t: any) => t.plate === objeto.plate && t.nombre === objeto.nombre)
                  );
                    this.jobs = filterJobs
      });

      this.matchModeOptions = [
        { label: 'Comienza con', value: FilterMatchMode.STARTS_WITH },
        { label: 'Contiene', value: FilterMatchMode.CONTAINS },
      ];

      // this.chartService.getMonths('month').subscribe((month: any) => {
      //   const months = month.filter((item: any, index: any) => {
      //     return index === month.findIndex((obj: any) => {
      //       return JSON.stringify(obj) === JSON.stringify(item);
      //     });
      //   });
      //   this.months = months
      // });

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
      return this.jobs ? this.first === (this.jobs.length - this.rows): true;
  }
  isFirstPage(): boolean {
      return this.jobs ? this.first === 0 : true;
  }


}
