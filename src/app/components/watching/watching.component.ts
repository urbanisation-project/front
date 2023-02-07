import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserPayload } from 'model/userPayload';
import { VideoDTO } from 'model/videoDTO';

@Component({
  selector: 'app-watching',
  templateUrl: './watching.component.html',
  styleUrls: ['./watching.component.scss']
})
export class WatchingComponent implements OnInit {
  videos:Array<VideoDTO>=[];
  video:VideoDTO={};
  user:UserPayload={};
  constructor(public sanitizer: DomSanitizer, private router:Router){}
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    if(Object.keys(this.user).length === 0){
      this.router.navigate(['/user-login']);
    }
    this.videos = JSON.parse(localStorage.getItem('selectedList') || '[]');
    this.video = JSON.parse(localStorage.getItem('selectedVideo') || '[]');
  }
  
  convertLink(video:VideoDTO):any{
    return this.sanitizer.bypassSecurityTrustResourceUrl(video.link as string)
  }
  addToPlaylist(video:VideoDTO){
    this.router.navigate(['/add-to-playlist'])
  }
  goWatchVideo(video:VideoDTO){
    localStorage.setItem("selectedVideo",JSON.stringify(video));
    this.video = video;
    var videoss= JSON.parse(localStorage.getItem('currentList') || '[]');
    localStorage.setItem("selectedList",JSON.stringify(videoss.filter((vid:VideoDTO)=> {return vid.link!=this.video.link})));
    this.videos = JSON.parse(localStorage.getItem('selectedList') || '[]');
    this.router.navigate(['/watching']);
  }

}


