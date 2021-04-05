import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ItemDocuments } from '../Models/ItemDocuments';
import { Item } from '../Models/ItemDTO';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient : HttpClient) { }
  
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllItems(): Observable <Item[]>{
    return this.httpClient.get<Item[]> (`${environment.Items}`,this.httpHeader) ;
  }
  inserItem(Item:Item): Observable <any>{
    return this.httpClient.post<any> (`${environment.Items}`,Item,this.httpHeader) ;
  }
  updateItem(ItemId:number,Item:Item): Observable <any>{
    return this.httpClient.put<any> (`${environment.Items}${ItemId}`,Item,this.httpHeader) ;
  }
  deleteItem(id:number):Observable<any>{ 
    return this.httpClient.delete<any>(`${environment.Items}${id}`,this.httpHeader);
  }
  GetItemById(ItemId: number): Observable<any> {
    return this.httpClient.get<Item>(`${environment.Items}${ItemId}`, this.httpHeader)
  }
  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = `${environment.Items}api/dashboard/UploadImage`;
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData).pipe(
        map(() => { return true; }));
  }
  PostItemDocumentsDTO(itemDoc:ItemDocuments[]): Observable <any >{
  
    return this.httpClient.post<any> (`${environment.ItemDocuments}`,itemDoc,this.httpHeader) ;
  }
  GetItemDocumentsItemId(itemId): Observable <any>{
  
    return this.httpClient.get<any> (`${environment.GetItemDocumentsItemId}${itemId}`,this.httpHeader) ;
  }
  deletedocument(docID): Observable <any>{
  
    return this.httpClient.delete<any> (`${environment.ItemDocuments}${docID}`,this.httpHeader) ;
  }
  getImage(ImgString): Observable <any>{
  
    return this.httpClient.get<any> (`${environment.GetImage}${ImgString}`,this.httpHeader) ;
  }
}
