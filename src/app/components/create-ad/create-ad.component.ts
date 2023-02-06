import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvertiserControllerService } from 'api/advertiserController.service';
import { AdPayload } from 'model/adPayload';
import { AdsAdIdBody } from 'model/adsAdIdBody';
import { AdSetPayload } from 'model/adSetPayload';
import { AdvertiserPayload } from 'model/advertiserPayload';
import { CampaignPayload } from 'model/campaignPayload';
import { AdsComponent } from '../ads/ads.component';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss']
})
export class CreateAdComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl('-1'),
    name: new FormControl('', Validators.required),
    resource: new FormControl(''),
    file: new FormControl(null, Validators.required),
    description: new FormControl(''),
    visitorsCount: new FormControl(),
    adSet: new FormControl({})
  });
  advertiser: AdvertiserPayload = {}
  campain: CampaignPayload = {}
  adSet: AdSetPayload = {}
  ad: AdPayload = {};
  selectedFiles?: FileList ;
  selectedFile = null;
  formData: FormData = new FormData();
  image: any;

  constructor(private router: Router, private advertiserControllerService: AdvertiserControllerService) { }
  ngOnInit(): void {
    this.advertiser = JSON.parse(localStorage.getItem('advertiser') || '{}');
    this.campain = JSON.parse(localStorage.getItem('campagne') || '{}');
    this.adSet = JSON.parse(localStorage.getItem('adset') || '{}');
    console.log(this.advertiser)
    if (Object.keys(this.advertiser).length === 0) {
      this.router.navigate(['/advertiser-login']);
    }
  }
  get f(){
    return this.form.controls;
  }
  onFileChange(event: any) {
  
    if (event.target.files.length > 0) {

      console.log({"file":event.target.files[0]})
      const image = event.target.files[0];
      // this.currentFileUpload=event.target.files.get(0);
      
      this.image=new Blob([event.target.files[0]], {
        type: 'image/jpeg'
      })

      this.formData.append('file', event.target.files[0]);
      
      this.form.patchValue({
        file:image
      });
    }
  }


  onSubmit() {
    this.ad.id = -1;
    this.ad.adSet = this.adSet;
    this.ad.description = this.form.value.description!;
    this.ad.name = this.form.value.name!
    this.ad.resource = {}
    this.ad.visitorsCount = 0
    this.advertiserControllerService.save5(this.ad).subscribe((res: AdPayload) => {
      console.log(res)
      this.advertiserControllerService.addImageToAdForm(res.id!,this.image).subscribe((response:any) => {
        console.log(response)
        this.router.navigate(['/ads'])
      })
    });
  }

}

