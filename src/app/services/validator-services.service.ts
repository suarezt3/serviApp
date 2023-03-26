import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidatorServicesService implements AsyncValidator {

  private urlPlate        : string = "https://grngoczncojjbtpiaflf.supabase.co/rest/v1/clients?plate=eq.";//URl para consultar la placa de los clientes

  constructor(private http: HttpClient) { }

    validate( control: AbstractControl): Observable<ValidationErrors | null> {
      let headers = new HttpHeaders({
        'apikey'       : environment.supabaseKey,
        'Authorization': environment.authorization,
      })
    const plate = control.value.toUpperCase();
    return this.http.get<any[]>(`${this.urlPlate}${ plate }`, {headers})
                .pipe(
                  // delay(3000),
                  map( resp => {
                    console.log("RESPUESTA", resp);
                    return ( resp.length === 0 )
                        ? null
                        : { plateExist: 'Esta placa ya existe en la base de datos' }
                  })
                );

  }
}
