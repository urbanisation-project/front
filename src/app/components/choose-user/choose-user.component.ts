import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-user',
  templateUrl: './choose-user.component.html',
  styleUrls: ['./choose-user.component.scss']
})
export class ChooseUserComponent {
  constructor(private router: Router){}
  user(){
    this.router.navigate(['/user-login'])
  }
  annonceur(){
    this.router.navigate(['/advertiser-login'])
  }

}
