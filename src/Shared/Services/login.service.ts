import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username: string | undefined
  password: string | undefined
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': ' */* ',
    })
  };
  constructor(private httpClient: HttpClient) { }
  
  login(username:string,password:string){
    this.username=username;
    this.password=password
    let Data = { username, password }
    return this.httpClient.post(`${environment.Domain}api/authenticate/login`, Data, this.httpHeader)
  }
  public isLoggedIn() {
    return !!localStorage.getItem("token");
  }
}
