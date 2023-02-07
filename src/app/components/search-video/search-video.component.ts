import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchControllerService } from 'api/searchController.service';
import { UserPayload } from 'model/userPayload';
import { VideoPayload } from 'model/videoPayload';
import { VideosResponse } from 'model/videosResponse';

@Component({
  selector: 'app-search-video',
  templateUrl: './search-video.component.html',
  styleUrls: ['./search-video.component.scss']
})
export class SearchVideoComponent implements OnInit {
  form = new FormGroup({
    query: new FormControl(''),
    isYouTube: new FormControl(false),
    isDailymotion: new FormControl(false)
  });
  user:UserPayload={};
  constructor(private searchControllerService: SearchControllerService, private router: Router) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    if(Object.keys(this.user).length === 0){
      this.router.navigate(['/user-login']);
    }
  }

  onSubmit() {
    const body = {
      "youtube": this.form.value.isYouTube as boolean,
      "dailymotion": this.form.value.isDailymotion as boolean
    }
    localStorage.setItem("youtubeVideos", JSON.stringify('[]'));
    localStorage.setItem("dailymotionVideos", JSON.stringify('[]'));
    localStorage.setItem("query", JSON.stringify(''));
    localStorage.setItem("ads", JSON.stringify('[]'));
    localStorage.setItem("currentList", JSON.stringify('[]'));
    this.searchControllerService.researchVideo(body, this.form.value.query as string).subscribe(
      (res: VideosResponse) => {
        console.log(res)
        localStorage.setItem("youtubeVideos", JSON.stringify(res!.videos!["youtube"] || '[]'));
        localStorage.setItem("dailymotionVideos", JSON.stringify(res!.videos!["dailymotion"] || '[]'));
        localStorage.setItem("query", JSON.stringify(res.query!));
        localStorage.setItem("ads", JSON.stringify(res.ads));
        this.router.navigate(['/result']);
      }
    )
  }
}
