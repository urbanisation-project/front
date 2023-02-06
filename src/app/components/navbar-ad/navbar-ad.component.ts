import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-ad',
  templateUrl: './navbar-ad.component.html',
  styleUrls: ['./navbar-ad.component.scss']
})
export class NavbarAdComponent {
  constructor(private router:Router){}
  goProfile(){
    this.router.navigate(['/advertiser-profile'])
  }
  logout(){
    localStorage.setItem("advertiser", '{}');
    this.router.navigate(['/advertiser-login'])
  }
  goUpdateAdvertiserPassword(){
    this.router.navigate(['/change-password'])
  }
}
