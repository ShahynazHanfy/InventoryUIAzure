import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemStatusEmp } from '../Models/ItemStatusEmp';

@Injectable({
  providedIn: 'root'
})
export class ItemStatusEmpService {
  constructor(private httpClient : HttpClient) { }
  
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllItemStatusEmp(): Observable <ItemStatusEmp[]>{
    return this.httpClient.get<ItemStatusEmp[]> (`${environment.ItemStatusEmps}`,this.httpHeader) ;
  }
  insertItemStatusEmp(itemStatusEmp:ItemStatusEmp): Observable <any>{
    return this.httpClient.post<any> (`${environment.ItemStatusEmps}`,itemStatusEmp,this.httpHeader) ;
  }
  GetAllStatusesByItemId(ItemId): Observable <any>{
    return this.httpClient.get<any> (`${environment.GetAllStatusesByItemId}${ItemId}`,this.httpHeader) ;
  }
}
