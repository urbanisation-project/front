import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvertiserControllerService } from 'api/advertiserController.service';
import { AdSetPayload } from 'model/adSetPayload';
import { AdvertiserPayload } from 'model/advertiserPayload';
import { CampaignPayload } from 'model/campaignPayload';

@Component({
  selector: 'app-update-adset',
  templateUrl: './update-adset.component.html',
  styleUrls: ['./update-adset.component.scss']
})
export class UpdateAdsetComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    keywords: new FormControl(''),
    password: new FormControl('', Validators.required)
  });
  advertiser: AdvertiserPayload = {}
  adSet:AdSetPayload={}
  keywords: any;
  isFormSubmitted = false;
  constructor(private router: Router,private advertiserControllerService:AdvertiserControllerService){}
  ngOnInit(): void {
    this.advertiser = JSON.parse(localStorage.getItem('advertiser') || '{}');
    console.log(this.advertiser)
    if (Object.keys(this.advertiser).length === 0) {
      this.router.navigate(['/advertiser-login']);
    }
    this.adSet = JSON.parse(localStorage.getItem('adset') || '{}');
    this.keywords=this.adSet.keywords?.map(key=>key.name)
  }
  updateAdset(){
    this.isFormSubmitted = true
    if(this.form.value.password===this.advertiser.password){
      this.advertiserControllerService.save4(this.adSet).subscribe((res :AdSetPayload)=> {
        console.log(res);
        this.router.navigate(['/adsets'])
      });
    }
  }
  cancel(){
    this.router.navigate(['/adsets'])
  }
}
