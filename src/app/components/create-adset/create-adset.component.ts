import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvertiserControllerService } from 'api/advertiserController.service';
import { AdPayload } from 'model/adPayload';
import { AdSetPayload } from 'model/adSetPayload';
import { AdvertiserPayload } from 'model/advertiserPayload';
import { CampaignPayload } from 'model/campaignPayload';
import { KeywordPayload } from 'model/keywordPayload';

@Component({
  selector: 'app-create-adset',
  templateUrl: './create-adset.component.html',
  styleUrls: ['./create-adset.component.scss']
})
export class CreateAdsetComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl('-1'),
    name: new FormControl(''),
    keywords: new FormControl(''),
    campaign: new FormControl({})
  });
  advertiser: AdvertiserPayload = {}
  adSet:AdSetPayload={}
  campain:CampaignPayload={}
  constructor(private router: Router,private advertiserControllerService:AdvertiserControllerService){}
  ngOnInit(): void {
    this.advertiser = JSON.parse(localStorage.getItem('advertiser') || '{}');
    console.log(this.advertiser)
    if (Object.keys(this.advertiser).length === 0) {
      this.router.navigate(['/advertiser-login']);
    }
    this.campain = JSON.parse(localStorage.getItem('campagne') || '{}');
  }
  onSubmit(){
    this.adSet.id=-1
    this.adSet.name=this.form.value.name!;
    this.adSet.campaign=this.campain;
    this.adSet.keywords=this.form.value.keywords?.split(" ").map(keyword=>{
      var key:KeywordPayload={}
      key.id=-1;
      key.name=keyword
      return key;
    })
    this.advertiserControllerService.save4(this.adSet).subscribe((res:AdSetPayload)=>{
      this.router.navigate(['/adsets']);
    });
  }
}
