import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchControllerService } from 'api/searchController.service';
import { SearchVideoComponent } from '../search-video/search-video.component';

@Component({
  selector: 'app-search-navbar',
  templateUrl: './search-navbar.component.html',
  styleUrls: ['./search-navbar.component.scss']
})
export class SearchNavbarComponent extends SearchVideoComponent{
  constructor(private _searchControllerService: SearchControllerService, private _router: Router){
    super(_searchControllerService,_router);
  }
  redirectToMyPlaylists(){
    this._router.navigate(['/playlists']);
  }
  logout(){
    localStorage.setItem("user", '{}');
    this._router.navigate(['/user-login'])
  }
  profil(){
    this._router.navigate(['/profile'])
  }
  goUpdatePassword(){
    this._router.navigate(['/change-user-password'])
  }
}
