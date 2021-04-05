import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubGroup } from '../Models/SubGroup';

@Injectable({
  providedIn: 'root'
})
export class SubGroupService {

  constructor(private httpClient : HttpClient) { }
  
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllSubGroup(): Observable <SubGroup[]>{
    return this.httpClient.get<SubGroup[]> (`${environment.SubGroup}`,this.httpHeader) ;
  }
  inserSubGroup(SubGroup:SubGroup|undefined): Observable <any>{
    return this.httpClient.post<any> (`${environment.SubGroup}`,SubGroup,this.httpHeader) ;
  }

  deleteSubGroup(id:number):Observable<any>{ 
    return this.httpClient.delete<any>(`${environment.SubGroup}${id}`,this.httpHeader);
  }

  updateSubGroup(id:Number,SubGroup:SubGroup):Observable<SubGroup>{
    return this.httpClient.put<SubGroup>(`${environment.SubGroup}`+ id,SubGroup,this.httpHeader);
  }
  GetSubGroupById(SubGroupId: number): Observable<any> {
    return this.httpClient.get<SubGroup>(`${environment.SubGroup}${SubGroupId}`, this.httpHeader)
  }
  GetGroupBySubGroupId(subId): Observable<any> {
    return this.httpClient.get<any>(`${environment.GetGroupBySubGroupId}${subId}`, this.httpHeader)
  }
  GetSubGroupByGroupId(groupId:number): Observable<any> {
    return this.httpClient.get<any>(`${environment.GetSubGroupsByGroupId}${groupId}`, this.httpHeader)
  }
  ActiveSubGroup(id:Number,SubGroup:SubGroup):Observable<SubGroup>{
    return this.httpClient.put<SubGroup>(`${environment.Active}`+ id,SubGroup,this.httpHeader);
  }
}

