import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { group } from "./../Models/Group";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private httpClient : HttpClient) { }
  
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllgroups(): Observable <group[]>{
    return this.httpClient.get<group[]> (`${environment.Group}`,this.httpHeader) ;
  }
  inserGroup(group:group|undefined): Observable <any>{
    return this.httpClient.post<any> (`${environment.Group}`,group,this.httpHeader) ;
  }

  deleteGroup(id:number):Observable<any>{ 
    return this.httpClient.delete<any>(`${environment.Group}${id}`,this.httpHeader);
  }

  updateGroup(id:Number,Group:group):Observable<group>{
    return this.httpClient.put<group>(`${environment.Group}`+ id,Group,this.httpHeader);
  }
  GetGroupById(GroupId: number): Observable<any> {
    return this.httpClient.get<group>(`${environment.Group}${GroupId}`, this.httpHeader)
  }
}
