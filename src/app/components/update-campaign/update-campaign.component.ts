import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvertiserControllerService } from 'api/advertiserController.service';
import { AdvertiserPayload } from 'model/advertiserPayload';
import { CampaignPayload } from 'model/campaignPayload';

@Component({
  selector: 'app-update-campaign',
  templateUrl: './update-campaign.component.html',
  styleUrls: ['./update-campaign.component.scss']
})
export class UpdateCampaignComponent implements OnInit{
  form = new FormGroup({
    name: new FormControl(''),
    objective: new FormControl(''),
    budget: new FormControl('0'),
    password: new FormControl('', Validators.required)
  });
  advertiser: AdvertiserPayload = {}
  campaign: CampaignPayload={}
  isFormSubmitted = false;
  constructor(private router: Router, private advertiserControllerService: AdvertiserControllerService){}
  ngOnInit(): void {
    this.advertiser = JSON.parse(localStorage.getItem('advertiser') || '{}');
    console.log(this.advertiser)
    if (Object.keys(this.advertiser).length === 0) {
      this.router.navigate(['/advertiser-login']);
    }
    this.campaign = JSON.parse(localStorage.getItem('campagne') || '{}');
  }
  updateCampaign(){
    this.isFormSubmitted = true
    if(this.form.value.password===this.advertiser.password){
      this.advertiserControllerService.save3(this.campaign).subscribe((res :CampaignPayload)=> {
        console.log(res);
        this.router.navigate(['/campagnes'])
      });
    }
  }
  cancel(){
    this.router.navigate(['/campagnes']);
  }
}
