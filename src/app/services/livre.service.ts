import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { livre } from '../models/livre.model';

const baseUrl = 'http://localhost:8080/api/livres';

@Injectable({
  providedIn: 'root'
})
export class livreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<livre[]> {
    return this.http.get<livre[]>(baseUrl);
  }

  get(id: any): Observable<livre> {
    return this.http.get<livre>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<livre[]> {
    return this.http.get<livre[]>(`${baseUrl}?title=${title}`);
  }
}