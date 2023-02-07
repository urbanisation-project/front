import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvertiserControllerService } from 'api/advertiserController.service';
import { AdvertiserPayload } from 'model/advertiserPayload';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpAdvertiserComponent implements OnInit{
  form = new FormGroup({
    id: new FormControl('-1'),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  isFormSubmitted = false;
  constructor(private advertiserControllerService:AdvertiserControllerService, private router: Router){}
  ngOnInit(): void {
  }

  onSubmit() {
    this.isFormSubmitted = true;
    this.advertiserControllerService.save2(this.form.value as AdvertiserPayload).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/advertiser-login']);
    });
  }

  gotoAdvertiserLogin(){
    this.router.navigate(['/advertiser-login']);
  }
}