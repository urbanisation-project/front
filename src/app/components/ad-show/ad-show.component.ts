import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdvertiserControllerService } from 'api/advertiserController.service';
import { AdPayload } from 'model/adPayload';

@Component({
  selector: 'app-ad-show',
  templateUrl: './ad-show.component.html',
  styleUrls: ['./ad-show.component.scss']
})
export class AdShowComponent implements OnInit {
  ads: Array<AdPayload> = []
  ad: AdPayload = {}
  constructor(private advertiserControllerService: AdvertiserControllerService, private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    this.ads=(JSON.parse(localStorage.getItem('ads') || '[]') as Array<AdPayload>);
    this.ad=this.ads[Math.floor(Math.random() * this.ads.length)];
    this.increment(this.ad)
  }
  increment(ad: AdPayload) {
    if(ad && ad.id){
      this.advertiserControllerService.updateAdVisitorsCount(ad.id as number).subscribe((res)=>{console.log(res);})
    }
  }
  getImage(ad:AdPayload){
    let objectURL = 'data:image/png;base64,' + ad.resource?.data;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
  

}
