import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/interfaces/clients.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private url             : string = "https://grngoczncojjbtpiaflf.supabase.co/rest/v1/clients"; //URL para traer todos los clientes
 private urlJobs         : string = "https://grngoczncojjbtpiaflf.supabase.co/rest/v1/jobs"; //URL para los trabajos



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

   return this.http.get<Client>(`${this.url}?numberDocument=eq.${id}`, {headers}).pipe()
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
     * @param id Para editar los datos de un cliente
     * @returns
     */
    editClientDocument(id: string, body: {}) {
      let headers = new HttpHeaders({
        'apikey'       : environment.supabaseKey,
        'Authorization': environment.authorization,
        'Content-Type' : 'application/json',
      })

       return this.http.patch(`${this.url}?numberDocument=eq.${id}`, body, {headers}).pipe()
    }


    /**
     *
     * @param body Crear un nuevo trabajo
     * @returns
     */
    createJobs(body: {}): Observable<any> {
      let headers = new HttpHeaders({
        'apikey'       : environment.supabaseKey,
        'Authorization': environment.authorization,
        'Content-Type' : 'application/json',
       })
       return this.http.post<any>(this.urlJobs, body, {headers})
    }


    /**
 *
 * @param id Para obtener datos de cada trabajo de un cliente
 * @returns
 */
getJobsClients(id: string): Observable<Client> {
  let headers = new HttpHeaders({
    'apikey'       : environment.supabaseKey,
    'Authorization': environment.authorization,
  })

   return this.http.get<Client>(`${this.urlJobs}?user=eq.${id}`, {headers})
}





getBrands() {
  let headers = new HttpHeaders({
    'apikey'       : environment.supabaseKey,
    'Authorization': environment.authorization
  })
   return this.http.get<any>(`${this.url}?select=vehicleBrand`, {headers}).pipe()
}


/**
 *
 * @returns Obtener las marcas de vehiculos
 */
getBrandVehicles() {
  return this.http.get<any>('../../assets/json/brands.json')
}

/**
 *
 * @returns Obtener los meses
 */
getMonths() {
  return this.http.get<any>('../../assets/json/months.json')
}
/**
 *
 * @returns Obtener los dias
 */
getDays() {
  return this.http.get<any>('../../assets/json/days.json')
}
/**
 *
 * @returns Obtener los años
 */
getYears() {
  return this.http.get<any>('../../assets/json/years.json')
}


}
