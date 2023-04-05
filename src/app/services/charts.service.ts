import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from 'src/interfaces/clients.interface';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private url         : string = "https://grngoczncojjbtpiaflf.supabase.co/rest/v1/jobs"; //URL para los trabajos
  //https://grngoczncojjbtpiaflf.supabase.co/rest/v1/jobs?year=eq.2029&month=eq.Mayo&vehicleBrand=eq.Ford

  constructor(private http: HttpClient) { }



  /**
   *
   * @param vehicle devuelve la data filtrada por mes, año y marca de auto
   * @returns
   */
  getJobs(year: number, month: string, brand: string) {
    let headers = new HttpHeaders({
      'apikey'       : environment.supabaseKey,
      'Authorization': environment.authorization,
    })
     return this.http.get(`${this.url}?year=eq.${year}&month=eq.${month}&vehicleBrand=eq.${brand}`, {headers})
    }


    /**
     *
     * @param month Devuelve los meses de la base de datos
     * @returns
     */
    getMonths(month: string) {
      let headers = new HttpHeaders({
        'apikey'       : environment.supabaseKey,
        'Authorization': environment.authorization,
      })
       return this.http.get(`${this.url}?select=${month}`, {headers})
      }

      /**
       *
       * @param year devuelve los años de la base de datos
       * @returns
       */
    getYears(year: string) {
      let headers = new HttpHeaders({
        'apikey'       : environment.supabaseKey,
        'Authorization': environment.authorization,
      })
       return this.http.get(`${this.url}?select=${year}`, {headers})
      }

      /**
       *
       * @param brand devuelve las marcas de autos de la base de autos
       * @returns
       */
    getBrand(brand: string) {
      let headers = new HttpHeaders({
        'apikey'       : environment.supabaseKey,
        'Authorization': environment.authorization,
      })
       return this.http.get(`${this.url}?select=${brand}`, {headers})
      }


}
