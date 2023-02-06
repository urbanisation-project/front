import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvertiserControllerService } from 'api/advertiserController.service';
import { AdvertiserPayload } from 'model/advertiserPayload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileAdvertiserComponent implements OnInit {
  constructor(private advertiserControllerService: AdvertiserControllerService,private  router:Router){}
  form = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('', Validators.required),
  });
  advertiser: AdvertiserPayload = {}
  isFormSubmitted = false;
  ngOnInit(): void {
    this.advertiser = JSON.parse(localStorage.getItem('advertiser') || '{}');
    console.log(this.advertiser)
    if (Object.keys(this.advertiser).length === 0) {
      this.router.navigate(['/advertiser-login']);
    }
  }
  updateProfile(){
    this.isFormSubmitted = true
    if(this.form.value.password===this.advertiser.password){
      this.advertiserControllerService.save2(this.advertiser).subscribe((advertiser :AdvertiserPayload)=> {
        localStorage.setItem("advertiser", JSON.stringify(advertiser))
        this.router.navigate(['/campagnes'])
      });
    }
  }
  cancel(){
    this.router.navigate(['/campagnes']);
  }
}