import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get<any>('../../assets/data.json')
    .toPromise()
    .then(res => <Cliente[]>res.data)
    .then(data => { return data; });
}

}
