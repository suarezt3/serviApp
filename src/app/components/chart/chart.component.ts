import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  public result: any = 0 || undefined;

  public year!: number;
  public month!: string;
  public brand!: string;


  public brands! : BRANDS[];
  public months! : MONTH[];
  public years!  : YEAR[];
  public myForm! : FormGroup





  constructor(private fb: FormBuilder, private dataService: DataService, private chartService: ChartsService){}



    ngOnInit() {

      console.log("Resultado oninit", this.result);

      this.myForm = this.fb.group({
        year: ['', [Validators.required]],
        month: ['', [Validators.required]],
        brand: ['', [Validators.required]]
      })


      this.chartService.getMonths('month').subscribe((month: any) => {
        const months = month.filter((item: any, index: any) => {
          return index === month.findIndex((obj: any) => {
            return JSON.stringify(obj) === JSON.stringify(item);
          });
        });
        this.months = months
      });

      this.chartService.getYears('year').subscribe((year: any) => {
        const years = year.filter((item: any, index: any) => {
          return index === year.findIndex((obj: any) => {
            return JSON.stringify(obj) === JSON.stringify(item);
          });
        });
        this.years = years
      });

      this.chartService.getBrand('vehicleBrand').subscribe((brand: any) => {
        const brands = brand.filter((item: any, index: any) => {
          return index === brand.findIndex((obj: any) => {
            return JSON.stringify(obj) === JSON.stringify(item);
          });
        });
        this.brands = brands
      })
    }

    invalidField( field: string ) {
      return this.myForm.get(field)?.invalid
              && this.myForm.get(field)?.touched;
    }


    submit () {
      if(this.myForm.invalid) {
        this.myForm.markAllAsTouched();
      }else {
        this.year = this.myForm.get('year')?.value
        this.month = this.myForm.get('month')?.value
        this.brand = this.myForm.get('brand')?.value
         this.chartService.getJobs(this.year, this.month, this.brand).subscribe((res: any) => {
           this.result = res.length
           console.log(this.result);

        })
      }
    }


}
