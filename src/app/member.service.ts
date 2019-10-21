import { Injectable } from '@angular/core';
import {Member} from './member';
import {MEMBERS} from './members/mock-members';
import { Observable , of} from 'rxjs';
import { MessagesService } from './messages.service';



@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(messageService: MessagesService) { }
  // get the object and after return the data


  getMembers(): Observable<Member[]> {
    return of(MEMBERS);
  }

  getMember(id: number): Observable<Member> {
    return of(MEMBERS.find(member => member.id === id));
  }
}
