import { Injectable } from '@angular/core';
import {Member} from './member';
import {MEMBERS} from './members/mock-members';
import { Observable , of} from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {tap , map , catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content - Type': 'application / json}'})
  };


  constructor(private messageService: MessagesService, private http: HttpClient ) {}
  // get the object and after return the data
  private membersUrl = '/api/members';

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl);
  }

  getMember(id: number): Observable<Member> {
    const url = `${this.membersUrl}/${id}`;
    return this.http.get<Member>(url).pipe(
      tap(_ => console.log(`${id}`))
    );
  }

  updateMember(member: Member): Observable<any> {
    return this.http.put(this.membersUrl, member , this.httpOptions).pipe(
      tap(_ => console.log(`update the member with this ${member.id}`))
    );
  }
  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.membersUrl , member , this.httpOptions);
  }
}


