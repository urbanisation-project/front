import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdvertiserControllerService } from 'api/advertiserController.service';
import { AdPayload } from 'model/adPayload';
import { AdSetPayload } from 'model/adSetPayload';
import { AdvertiserPayload } from 'model/advertiserPayload';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  ads:Array<AdPayload>=[]
  constructor(
    private router: Router, 
    private advertiserControllerService: AdvertiserControllerService) { }
  advertiser: AdvertiserPayload = {}
  adset:AdSetPayload={}

  ngOnInit(): void {
    this.advertiser = JSON.parse(localStorage.getItem('advertiser') || '{}');
    console.log(this.advertiser)
    if (Object.keys(this.advertiser).length === 0) {
      this.router.navigate(['/advertiser-login']);
    }
    this.adset = JSON.parse(localStorage.getItem('adset') || '{}');
    this.advertiserControllerService.getAdSetAds(this.adset.id!).subscribe((res:Array<AdPayload>)=>{
      this.ads=res;
    })
  }
  goCreateAd(){
    this.router.navigate(['/create-ad']);
  }
  view(ad: AdPayload){
    localStorage.setItem("ad", JSON.stringify(ad)||'{}')
    this.router.navigate(['/view-ad'])
  }
}

