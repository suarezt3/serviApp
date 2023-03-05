import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get<any>('../../assets/json/data.json').pipe()
}


getBrandVehicles() {
  return this.http.get<any>('../../assets/json/brands.json')
}


}
