import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/services/charts.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public basicData   : any;
  public basicOptions: any;
  public brands : any[] =[];
  public vehicle!: any;

  constructor(private dataService: DataService, private chartService: ChartsService){}



    ngOnInit() {

        this.dataService.getBrands().subscribe((brands) => {
          console.log("MARCAS", brands);
        })

        this.chartService.getJobsClients('Ford Fiesta').subscribe((vehicle) => {
          console.log("DATA", vehicle);
          this.vehicle = vehicle
        })


    }

}
