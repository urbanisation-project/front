import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserPayload } from 'model/userPayload';
import { VideoDTO } from 'model/videoDTO';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit{
  user:UserPayload={};
  youtubeVideos:Array<VideoDTO>= JSON.parse(localStorage.getItem('youtubeVideos') || '[]');
  dailymotionVideos:Array<VideoDTO>= JSON.parse(localStorage.getItem('dailymotionVideos') || '[]');
  constructor(public sanitizer: DomSanitizer, private router:Router){}
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    if(Object.keys(this.user).length === 0){
      this.router.navigate(['/user-login']);
    }
    this.youtubeVideos = JSON.parse(localStorage.getItem('youtubeVideos') || '[]');
    this.dailymotionVideos = JSON.parse(localStorage.getItem('dailymotionVideos') || '[]');
    localStorage.removeItem('selectedVideo');
    localStorage.removeItem('selectedList');
  }
  convertLink(video:VideoDTO):any{
    return this.sanitizer.bypassSecurityTrustResourceUrl(video.link as string)
  }
  goWatchVideo(video:VideoDTO,videos:Array<VideoDTO>){
    localStorage.setItem("currentList",JSON.stringify(videos));
    localStorage.setItem("selectedVideo",JSON.stringify(video));
    localStorage.setItem("selectedList",JSON.stringify(videos.filter(vid=> {return vid!=video})));
    this.router.navigate(['/watching']);
  }
}


