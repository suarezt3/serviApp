import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../interfaces/auth.interface";
import { environment } from "src/environments/environment";
import { Observable, catchError, map, of, tap } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl = "https://grngoczncojjbtpiaflf.supabase.co/rest/v1/usuario";

  private user?: User;

  constructor(private http: HttpClient) { }


  get currentUser():User|undefined {
    if(!this.user)return undefined;
    {
      return structuredClone(this.user);
    }
  }


  getUser(user: string, password: string):Observable<any>  {
    let headers = new HttpHeaders({
      'apikey'       : environment.supabaseKey,
      'Authorization': environment.authorization,
    })
     return this.http.get<any>(`${this.baseUrl}?usuario=eq.${user}&password=eq.${password}`, {headers})
     .pipe(
      tap( usuario =>  this.user = usuario[0]),
      tap( usuario =>  localStorage.setItem('token', usuario[0].id)),
     );
  }


  checkAuthentication(): Observable<boolean> {

    if ( !localStorage.getItem('token') ) return of(false);

    const token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'apikey'       : environment.supabaseKey,
      'Authorization': environment.authorization,
    })
    return this.http.get<any>(`${this.baseUrl}`, {headers})
      .pipe(
        tap( user => this.user = user[0] ),
        map( user => !!user[0]),
        catchError( err => of(false) )
      );

  }


  logout() {
    this.user = undefined;
    localStorage.clear();

  }





}


