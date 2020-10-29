import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUser } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<ResponseUser> {
    return this.http.get<ResponseUser>(this.url);
  }

  getUser(id: string): Observable<ResponseUser> {
    const _url = `${this.url}/${id}`;
    return this.http.get<ResponseUser>(_url);
  }
}