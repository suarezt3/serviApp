import { Component, OnInit } from '@angular/core';
import { BRANDS } from 'src/app/interfaces/brands.interface';
import { DAY } from 'src/app/interfaces/day.interface';
import { MONTH } from 'src/app/interfaces/month.interface';
import { YEAR } from 'src/app/interfaces/years.interface';
import { ChartsService } from 'src/app/services/charts.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public vehicle!: any;

  public brands! : BRANDS[];
  public days!   : DAY[];
  public months! : MONTH[];
  public years!  : YEAR[];






  constructor(private dataService: DataService, private chartService: ChartsService){}



    ngOnInit() {

       this.dataService.getBrandVehicles().subscribe((resp: BRANDS[]) => {
         this.brands = resp //!Cambiar para traer las marcas que estan en la DB y setear las marcas repetidas
       })

      this.dataService.getDays().subscribe((day: DAY[]) => {
        this.days = day
      });
        this.dataService.getMonths().subscribe((month: MONTH[]) => {
       this.months = month
      });
       this.dataService.getYears().subscribe((year: YEAR[]) => {
        this.years = year
      });


        this.dataService.getBrands().subscribe((brands) => {
          console.log("MARCAS", brands);
        })

        this.chartService.getJobsClients('Fiat').subscribe((vehicle: any) => {
          console.log("DATA", vehicle);
          console.log("LENGHT", vehicle.length);

          this.vehicle = vehicle.length
        })


    }


}
