import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdvertiserControllerService } from 'api/advertiserController.service';
import { AdvertiserPayload } from 'model/advertiserPayload';
import { Credentials } from 'model/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  advertiser:AdvertiserPayload={};
  isFormSubmitted = false;
  constructor(private advertiserControllerService:AdvertiserControllerService, private router: Router){}
  ngOnInit(): void {
  }
  async onSubmit(){
    this.isFormSubmitted = true;
    this.advertiserControllerService.authenticate1(this.form.value as Credentials).subscribe(
      response => {
      console.log(response);
      localStorage.setItem("advertiser",JSON.stringify(response));
      this.router.navigate(['/campagnes']);
    }, error =>{
      alert("email or pasword invalid");
    });
  }
  redirectTochoose(){
    this.router.navigate(['/choose'])
  }
}