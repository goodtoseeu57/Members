import { Component, OnInit } from '@angular/core';
import {Member} from '../member';
import { MemberService } from '../member.service';
import { MEMBERS } from './mock-members';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  // members = MEMBERS;
  selectedMember: Member;
  members: Member[];

  constructor(private memberService: MemberService ) { }


  ngOnInit() {
     // this.exampleMethod();
      this.getMembers();
  }

  // check it out what you learn
  /*
  exampleMethod() {
    const myMember = new Member();
    myMember.id = 1;
    myMember.name = 'Thanasis';
    myMember.id = 3;
    myMember.name = 'Nick';
    this.members.push(myMember);
    console.log(this.members);

  }
  */

  onSelectMember(member: Member): void {
    this.selectedMember = member;
  }

  getMembers(): void {
        this.memberService.getMembers().subscribe(members => this.members = members);
  }
}
