import { Component, OnInit } from '@angular/core';
import {Member} from '../member';
import { MemberService } from '../member.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  dataSource: Member [];
  displayedColumns: string[] = ['id', 'name', 'salary', 'joinDate'];

  selectedMember: Member;
  members: Member[];

  constructor(private memberService: MemberService ) { }


  ngOnInit() {
      this.getMembers();
      this.getMembersAsDataSource();
  }

  onSelectMember(member: Member): void {
    this.selectedMember = member;
  }

  add(name: string ): void {
    name = name.trim();
    if (!name) { return; }
  }

  getMembers(): void {
        this.memberService.getMembers().pipe(tap(_ => console.log(this.members))).subscribe(members => this.members = members);
  }

  getMembersAsDataSource(): void  {
      this.memberService.getMembers().subscribe(members => this.dataSource = members);
   }
}
