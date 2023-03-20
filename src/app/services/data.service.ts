import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/interfaces/clients.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private url      : string = "https://grngoczncojjbtpiaflf.supabase.co/rest/v1/clients";
 private urlClient: string = "https://grngoczncojjbtpiaflf.supabase.co/rest/v1/clients?numberDocument=eq."
 private urlJobs  : string = "https://grngoczncojjbtpiaflf.supabase.co/rest/v1/jobs"

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
 * @param id Para obtener datos de un cliente
 * @returns
 */
getClientDocument(id: string): Observable<Client> {
  let headers = new HttpHeaders({
    'apikey'       : environment.supabaseKey,
    'Authorization': environment.authorization,
  })

   return this.http.get<Client>(`${this.urlClient}${id}`, {headers}).pipe()
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


    /**
     *
     * @param body Crear un nuevo trabajo
     * @returns
     */
    //!Pendiente implementar este servicio
    createJobs(body: {}): Observable<any> {
      let headers = new HttpHeaders({
        'apikey'       : environment.supabaseKey,
        'Authorization': environment.authorization,
        'Content-Type' : 'application/json',
       })
       return this.http.post<any>(this.urlJobs, body, {headers})
    }


getBrandVehicles() {
  return this.http.get<any>('../../assets/json/brands.json')
}


}
