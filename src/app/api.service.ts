import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Newmember} from './Models/newmembers';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:5000/api/members';

  getApiMembers(): Observable<Newmember[]> {
   return  this.http.get<Newmember[]>(this.apiUrl);

  }
}
