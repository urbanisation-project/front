import {Component, OnInit} from '@angular/core';
import {AdvertiserControllerService} from "../../../../../api/advertiserController.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdvertiserPayload} from "../../../../../model/advertiserPayload";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  constructor(private advertiserControllerService: AdvertiserControllerService,private  router:Router){}
  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
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
  updatePassword(){
    this.isFormSubmitted = true;
    if(this.form.value.oldPassword===this.advertiser.password){
      this.advertiser.password=this.form.value.newPassword!;
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
