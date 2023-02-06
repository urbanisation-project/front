import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvertiserControllerService } from 'api/advertiserController.service';
import { AdvertiserPayload } from 'model/advertiserPayload';
import { CampaignPayload } from 'model/campaignPayload';

@Component({
  selector: 'app-create-campagne',
  templateUrl: './create-campagne.component.html',
  styleUrls: ['./create-campagne.component.scss']
})
export class CreateCampagneComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl('-1'),
    owner: new FormControl({}),
    name: new FormControl(''),
    objective: new FormControl(''),
    budget: new FormControl('0')
  });
  constructor(private advertiserControllerService: AdvertiserControllerService,private router: Router){}
  advertiser: AdvertiserPayload = {}
  ngOnInit(): void {
    this.advertiser = JSON.parse(localStorage.getItem('advertiser') || '{}');
    console.log(this.advertiser)
    if (Object.keys(this.advertiser).length === 0) {
      this.router.navigate(['/advertiser-login']);
    }
  }
  onSubmit(){
    this.form.value.owner = this.advertiser;
    this.advertiserControllerService.save3(this.form.value as AdvertiserPayload).subscribe(
      (res:CampaignPayload)=> this.router.navigate(['/campagnes'])
    )
  }
}
