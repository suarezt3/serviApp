import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BRANDS } from 'src/app/interfaces/brands.interface';
import { DAY } from 'src/app/interfaces/day.interface';
import { JOB } from 'src/app/interfaces/jobs.interface';
import { MONTH } from 'src/app/interfaces/month.interface';
import { YEAR } from 'src/app/interfaces/years.interface';
import { ChartsService } from 'src/app/services/charts.service';
import { DataService } from 'src/app/services/data.service';
import * as moment from 'moment';

moment.locale("es");

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  //public result: any = 0 || undefined; // Resultado de total de autos de una marca para la grafica
  //public cars!: any;
  //public year!: number;
  //public month!: string;
  //public brand!: string;
  //public brands! : BRANDS[];
  //public months! : MONTH[];
  //public years!  : YEAR[];
  //public carsCount!: number; // Total de autos de una marca

  public jobs!: JOB[];
  public myForm! : FormGroup

  constructor(private fb: FormBuilder, private dataService: DataService, private chartService: ChartsService){}



    ngOnInit() {

      // this.myForm = this.fb.group({
      //   date: ['', [Validators.required]],
      // })

      this.chartService.getJobs().subscribe((resp: any) => {
        /**
         * Funcion para eliminar clientes duplicados y dejar al cliente solo con le ultimo trabajo realizado
         */
             let filterJobs = resp.reverse().filter((objeto: any, indice:any, self: any) =>
                   indice === self.findIndex((t: any) => t.plate === objeto.plate && t.nombre === objeto.nombre)
                  );
                    this.jobs = filterJobs
      });


      // this.chartService.getMonths('month').subscribe((month: any) => {
      //   const months = month.filter((item: any, index: any) => {
      //     return index === month.findIndex((obj: any) => {
      //       return JSON.stringify(obj) === JSON.stringify(item);
      //     });
      //   });
      //   this.months = months
      // });

    }





    invalidField( field: string ) {
      return this.myForm.get(field)?.invalid
              && this.myForm.get(field)?.touched;
    }


    // submit () {
    //   if(this.myForm.invalid) {
    //     this.myForm.markAllAsTouched();
    //   }else {
    //      this.chartService.getJobs().subscribe((res: any) => {

    //       const resCars = res.filter((item: any, index: any) => {
    //         return index === res.findIndex((obj: any) => {
    //           return JSON.stringify(obj.vehicle) === JSON.stringify(item.vehicle);
    //         });
    //       });

    //        this.carsCount = resCars.length
    //        this.cars = resCars
    //        this.result = res.length

    //     })
    //   }
    // }


}
