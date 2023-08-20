import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  public myForm!: FormGroup;
  public basicData: any;
  public basicOptions: any;
  public jobs: any
  public typeJobs: any
  public FiltersJobs: any;
  public brands: any;


  constructor(private dataService: DataService, private fb: FormBuilder) {}

    ngOnInit() {
      /**
       * Trae todas la marcas de autos
       */
      this.dataService.getBrandVehicles().subscribe((resp: any) => {
        this.brands = resp
      })

    /**
     * Traer los tipos de trabajos
     */
    this.dataService.getTypeJobs().subscribe((resp: any) => {
      this.typeJobs = resp
    })

      this.myForm = this.fb.group ({
        typeJobs :['',[Validators.required]],
        month    :['', Validators.required],
        brand    :['', Validators.required]
      })



      this.dataService.getJobs().subscribe((resp: any) =>{
        console.log("RESPUESTA", resp);
        this.jobs = resp

      })


        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.basicData = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Ventas',
                    data: [540, 325, 702, 620],
                    backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                    borderWidth: 1
                }
            ]
        };

        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }


    send() {
      console.log("Enviando el formulario", this.myForm.value);

    }

}
