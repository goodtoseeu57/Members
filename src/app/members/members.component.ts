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
    // this.displayedColumns();
    this.getMembers();
    this.getMembersAsDataSource();

  }

  onSelectMember(member: Member): void {
    this.selectedMember = member;
  }

   displayData(data: any): void {
     const result = data.filter((data1) =>  data1.age === 84);
     console.table(result);
   }


  add(name: string ): void {
    name = name.trim();
    if (!name) { return; }
    this.memberService.addMember({name} as Member).
    pipe(
    ).subscribe(member => this.members.push(member));
  }

  getMembers(): void {
        this.memberService.getMembers().pipe(tap(_ => console.log(this.members))).subscribe((members) => {
           this.members = members;
           this.displayData(this.members);
        });
      }

  getMembersAsDataSource(): void  {
      this.memberService.getMembers().subscribe(members => this.dataSource = members);
   }
}
