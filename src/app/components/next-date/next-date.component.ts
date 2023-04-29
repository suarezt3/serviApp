import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { JOB } from 'src/app/interfaces/jobs.interface';

moment.locale("es");

@Component({
  selector: 'app-next-date',
  templateUrl: './next-date.component.html',
  styleUrls: ['./next-date.component.css']
})
export class NextDateComponent implements OnInit {

  @Input() jobs!: any
  @Input() nextDate: any

  public daysDiff!: number;
  public dateNow  : any = moment().format("MM-DD-YYYY");
  public dateNext!: any;

  constructor() {}

  ngOnInit(): void {

    const startMoment = moment(this.dateNow);
    const endMoment: any = moment(this.nextDate);
    this.daysDiff = endMoment.diff(startMoment, "days");
    if(this.daysDiff < 0){
      this.daysDiff = 0;
    }
  }


}
