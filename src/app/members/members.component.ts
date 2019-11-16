import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { tap   } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {


    displayedColumns: string[] = ['id', 'name', 'salary', 'joinDate', 'actions'];
    dataSource: any;
    memberName: any;

    selectedMember: Member;
    members: Member[];
    membersArray = new Array<Member>();
    data = new Array<Member>();
    totalSalar =  0;

    constructor(private memberService: MemberService) { }


    ngOnInit() {
        // this.displayedColumns();
        this.getMembers();
        this.getMembersAsDataSource();
        console.log(this.makeName('nick', 'stavros'));

    }

    onSelectMember(member: Member): void {
        this.selectedMember = member;
    }

    displayData(data: any): void {

        console.table(data);
    }

    printTotalSalary(data: any) {
          return this.data.map(t => t.salary).reduce((acc, value) => acc + value, 0 );
    }


    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        // with that name as hero[Object] you can pass in the dunction one argument as one model that you have already created..
        this.memberService.addMember({ name } as Member).
            pipe(
                // look carefully here you can do it inside the sub the pushing
            ).subscribe(member => this.members.push(member));
    }

    getMembers(): void {
        this.memberService.getMembers().pipe().subscribe((members) => {
            this.members = members;
            this.dataSource = new MatTableDataSource(this.members);
            this.totalSalar = this.members.map(t => t.salary).reduce((acc, value) => acc + value , 0);

            this.displayData(this.members);
            this.members.forEach((member) => {
                const objectMember = new Member(member.id, member.name, member.salary, member.age, member.joinDate);
                // it works so if you make interpolation inside it works directly
                this.membersArray.push(objectMember);

            });
            this.displayData(this.membersArray);
        });
    }

    getMembersAsDataSource(): void {
        this.memberService.getMembers().subscribe(members => this.dataSource = members);
    }

    delete(member: Member): void {
        // check if this already exists
        this.members = this.members.filter(h => h !== member);
        this.memberService.deleteMember(member).subscribe();
    }

    makeName = (f: string, l: string) => ({ first: f, last: l });

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


}
