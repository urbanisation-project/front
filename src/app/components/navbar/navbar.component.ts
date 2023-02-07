import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor( private router: Router){
  }
  redirectToMyPlaylists(){
    this.router.navigate(['/playlists']);
  }
  logout(){
    localStorage.setItem("user", '{}');
    this.router.navigate(['/user-login'])
  }
  profil(){
    this.router.navigate(['/profile'])
  }
  changePassword(){
    this.router.navigate(['/change-user-password'])
  }
}
