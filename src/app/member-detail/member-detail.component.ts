import { Component, OnInit , Input } from '@angular/core';
import {Member} from '../member';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
  @Input() member: Member;
  constructor(private route: ActivatedRoute,
              private memberService: MemberService
              ) { }

  ngOnInit(): void {
    this.getMember();

  }

  getMember() {
    const id = +this.route.snapshot.paramMap.get('id') ;
    this.memberService.getMember(id).subscribe(member => this.member = member);
  }

}
