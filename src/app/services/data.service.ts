import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private url: string = "https://grngoczncojjbtpiaflf.supabase.co/rest/v1/clients";

  constructor(private http: HttpClient) {}

/**
 *
 * @returns Trae la base de datos
 */
  getClientes() {
    let headers = new HttpHeaders({
      'apikey'       : environment.supabaseKey,
      'Authorization': environment.authorization
    })
     return this.http.get<any>(this.url, {headers}).pipe()
}


  /**
   *
   * @param body Metodo para enviar el formualario
   * @returns
   */
    createClient(body: {}): Observable<any> {
      let headers = new HttpHeaders({
        'apikey'       : environment.supabaseKey,
        'Authorization': environment.authorization,
        'Content-Type' : 'application/json',
       })
       return this.http.post<any>(this.url, body, {headers})
    }


getBrandVehicles() {
  return this.http.get<any>('../../assets/json/brands.json')
}


}
