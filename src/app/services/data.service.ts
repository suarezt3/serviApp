import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 private url: string = "https://grngoczncojjbtpiaflf.supabase.co/rest/v1/clients";

//  private apiKey = environment.apikey;
//  private authorization = environment.authorization;
 private apikey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdybmdvY3puY29qamJ0cGlhZmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzMjM5MjIsImV4cCI6MTk5Mzg5OTkyMn0.vYXzFlw6S0kbEzuV8-9EoDF88Lu-DDs8BQ6l7_WVE3c";
 private authorization: string =  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdybmdvY3puY29qamJ0cGlhZmxmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODMyMzkyMiwiZXhwIjoxOTkzODk5OTIyfQ.nqJSZyQab0ZX0EPJqs7MYAe85HGbS5HCmVV0NoCFczY";

  constructor(private http: HttpClient) { }




  getClientes() {
    let headers = new HttpHeaders({
      'apikey': this.apikey,
      'Authorization': this.authorization })
     return this.http.get<any>(this.url, {headers}).pipe()
}


getBrandVehicles() {
  return this.http.get<any>('../../assets/json/brands.json')
}


}
