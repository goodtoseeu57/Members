import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import {Member} from '../member';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private memberService: MemberService) { }

  members: Member[] = [];


  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers().subscribe(members => this.members = members.slice(2, 5));


  }



}
