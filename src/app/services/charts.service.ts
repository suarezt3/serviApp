import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from 'src/interfaces/clients.interface';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private urlJobs         : string = "https://grngoczncojjbtpiaflf.supabase.co/rest/v1/jobs"; //URL para los trabajos

  constructor(private http: HttpClient) { }



  getJobsClients(vehicle: string) {
    let headers = new HttpHeaders({
      'apikey'       : environment.supabaseKey,
      'Authorization': environment.authorization,
    })

     return this.http.get(`${this.urlJobs}?vehicle=eq.${vehicle}`, {headers})


    }
}
