import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertiserControllerService } from 'api/advertiserController.service';
import { AdvertiserPayload } from 'model/advertiserPayload';
import { CampaignPayload } from 'model/campaignPayload';

@Component({
  selector: 'app-campagnes',
  templateUrl: './campagnes.component.html',
  styleUrls: ['./campagnes.component.scss']
})
export class CampagnesComponent implements OnInit {
  constructor(private router: Router, private advertiserControllerService: AdvertiserControllerService){}
  advertiser: AdvertiserPayload = {}
  campagnes: Array<CampaignPayload> = []
  ngOnInit(): void {
    this.advertiser = JSON.parse(localStorage.getItem('advertiser') || '{}');
    console.log(this.advertiser)
    if (Object.keys(this.advertiser).length === 0) {
      this.router.navigate(['/advertiser-login']);
    }
    this.advertiserControllerService.getAdvertiserCampaigns(this.advertiser.id!).subscribe((res: Array<CampaignPayload>)=> {
      this.campagnes = res})
  }
  goCreateCampain(){
    this.router.navigate(['/create-campagne'])
  }
  goAdsetes(campagne:CampaignPayload){
    localStorage.setItem('campagne',JSON.stringify(campagne)||'{}')
    this.router.navigate(['/adsets'])
  }
  editCampaign(campagne:CampaignPayload){
    localStorage.setItem('campagne',JSON.stringify(campagne)||'{}')
    this.router.navigate(['/update-campaign'])
  }
  
}
