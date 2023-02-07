import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PlaylistControllerService } from 'api/playlistController.service';
import { UserControllerService } from 'api/userController.service';
import { PlaylistDTO } from 'model/playlistDTO';
import { UserPayload } from 'model/userPayload';
import { VideoDTO } from 'model/videoDTO';

@Component({
  selector: 'app-mes-playlist',
  templateUrl: './mes-playlist.component.html',
  styleUrls: ['./mes-playlist.component.scss']
})
export class MesPlaylistComponent implements OnInit {
  playlists: Array<PlaylistDTO> = []
  user: UserPayload = {}
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    if (Object.keys(this.user).length === 0) {
      this.router.navigate(['/user-login']);
    }
    this.userController.getUserPlaylistsDTO(this.user.id!)
      .subscribe((res: Array<PlaylistDTO>) => {
        console.log(res)
        this.playlists = res
      });
  }
  constructor(private userController: UserControllerService, public sanitizer: DomSanitizer, private router: Router, private playlistControllerService: PlaylistControllerService) { }
  convertLink(video: VideoDTO): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video.link as string)
  }
  goWatchVideo(video: VideoDTO, videos: Array<VideoDTO>) {
    localStorage.setItem("currentList", JSON.stringify(videos));
    localStorage.setItem("selectedVideo", JSON.stringify(video));
    localStorage.setItem("selectedList", JSON.stringify(videos.filter(vid => { return vid != video })));
    this.router.navigate(['/watching']);
  }
  removeFromPlaylist(video: VideoDTO) {
    this.playlistControllerService.remove(video).subscribe(res =>
      this.userController.getUserPlaylistsDTO(this.user.id!)
        .subscribe((res: Array<PlaylistDTO>) => {
          console.log(res)
          this.playlists = res
        }))
  }
}
