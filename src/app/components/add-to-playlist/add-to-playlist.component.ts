import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlaylistControllerService } from 'api/playlistController.service';
import { UserControllerService } from 'api/userController.service';
import { PlaylistPayload } from 'model/playlistPayload';
import { UserPayload } from 'model/userPayload';
import { VideoDTO } from 'model/videoDTO';

@Component({
  selector: 'app-add-to-playlist',
  templateUrl: './add-to-playlist.component.html',
  styleUrls: ['./add-to-playlist.component.scss']
})
export class AddToPlaylistComponent implements OnInit {
  user: UserPayload = {};
  playlist:PlaylistPayload={};
  playlists: Array<PlaylistPayload> = [];
  selectedOption:PlaylistPayload={};
  form = new FormGroup({
    name: new FormControl('')
  });
  video:VideoDTO= {};
  constructor(private userControllerService: UserControllerService,private playlistControllerService : PlaylistControllerService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    if(Object.keys(this.user).length === 0){
      this.router.navigate(['/user-login']);
    }
    this.userControllerService.getUserPlaylists(this.user.id!).subscribe(
      (res: Array<PlaylistPayload>) => {
        this.playlists = res
      });
    this.video = JSON.parse(localStorage.getItem('selectedVideo') || '{}');
  }

  createPlaylist() {
    var playlistId=-1;
    const body = {
      "id": -1,
      "name": this.form.value.name as string,
      "user" : this.user
    }    
    this.playlistControllerService.save1(body).subscribe(
      (res:PlaylistPayload)=> {
      playlistId=res.id!;
      this.playlistControllerService.addVideoToPlaylist(this.video,playlistId).subscribe(res=>console.log(res));
    });
    
    this.router.navigate(['/watching']);
  }

  choosePlaylist() {
    console.log(this.selectedOption)
    var playlistId= this.selectedOption.id;
    const body = {
      "id": playlistId as number,
      "name": this.selectedOption as string,
      "user" : this.user
    } 
    this.playlistControllerService.addVideoToPlaylist(this.video,playlistId!).subscribe(res=>console.log(res));
    this.router.navigate(['/watching']);
  }
}
