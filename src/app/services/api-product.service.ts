import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {
  private url = 'https://66ddf097f7bcc0bbdcdf7331.mockapi.io/Products/';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Products[]>{
    return this.http.get<Products[]>(this.url)
  }
  getOne(id: string): Observable<Products>{
      return this.http.get<Products>(this.url + id)
    }
  
  contact(contact: Products){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
      return this.http.post<Products>(this.url, contact, {headers});
  }
}
