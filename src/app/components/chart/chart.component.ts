import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/services/charts.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public brands : any[] =[];
  public vehicle!: any;
  view: [number, number] = [700, 400];

   // options
   showXAxis: boolean = true;
   showYAxis: boolean = true;
   gradient: boolean = false;
   showLegend: boolean = true;
   showXAxisLabel: boolean = true;
   yAxisLabel: string = 'Marcas';
   showYAxisLabel: boolean = true;
   xAxisLabel: string = 'Total';

   colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  single = [
    {
      "name": "Ford",
      "value": 4245345
    },
    {
      "name": "Mazda",
      "value": 5000000
    },
    {
      "name": "Kia",
      "value": 7200000
    }
  ];

  constructor(private dataService: DataService, private chartService: ChartsService){}



    ngOnInit() {

      console.log("SINGLE", this.single);

        this.dataService.getBrands().subscribe((brands) => {
          console.log("MARCAS", brands);
        })

        this.chartService.getJobsClients('Ford Fiesta').subscribe((vehicle) => {
          console.log("DATA", vehicle);
          this.vehicle = vehicle
        })


    }

    onSelect(data: any): void {
      console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }

    onActivate(data:any): void {
      console.log('Activate', JSON.parse(JSON.stringify(data)));
    }

    onDeactivate(data: any): void {
      console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }

}
