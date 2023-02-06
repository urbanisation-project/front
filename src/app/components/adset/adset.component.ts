import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertiserControllerService } from 'api/advertiserController.service';
import { AdSetPayload } from 'model/adSetPayload';
import { AdvertiserPayload } from 'model/advertiserPayload';
import { CampaignPayload } from 'model/campaignPayload';

@Component({
  selector: 'app-adset',
  templateUrl: './adset.component.html',
  styleUrls: ['./adset.component.scss']
})
export class AdsetComponent implements OnInit {
  constructor(private router: Router, private advertiserControllerService : AdvertiserControllerService){}
  advertiser: AdvertiserPayload = {}
  adsets: Array<AdSetPayload> = []
  campaign: CampaignPayload= {}
  ngOnInit(): void {
    this.advertiser = JSON.parse(localStorage.getItem('advertiser') || '{}');
    console.log(this.advertiser)
    if (Object.keys(this.advertiser).length === 0) {
      this.router.navigate(['/advertiser-login']);
    }
    this.campaign = JSON.parse(localStorage.getItem('campagne') || '{}');
    this.advertiserControllerService.getCampaignAdSets(this.campaign.id!).subscribe((res:Array<AdSetPayload>)=>{
      this.adsets=res;
    });
  }
  goAds(adset:AdSetPayload){
    localStorage.setItem('adset',JSON.stringify(adset)||'{}')
    this.router.navigate(['/ads'])
  }
  goCreateAdSet(){
    this.router.navigate(['/create-adset'])
  }
  editAdset(adset: AdSetPayload){
    localStorage.setItem('adset',JSON.stringify(adset)||'{}')
    this.router.navigate(['/update-adset'])
  }
}
