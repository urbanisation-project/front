import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserPayload } from 'model/userPayload';
import { UserControllerService } from 'api/userController.service';
import { Credentials } from 'model/credentials';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  form = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  user:UserPayload={};
  isFormSubmitted = false;
  constructor(private userControllerService:UserControllerService, private router: Router){}
  ngOnInit(): void {
  }
  async onSubmit(){
    this.isFormSubmitted = true;
    this.userControllerService.authenticate(this.form.value as Credentials)
    .subscribe(
      response => {
      console.log(response);
      localStorage.setItem("user",JSON.stringify(response));
      this.router.navigate(['/search']);
    }, error =>{
      alert("email or pasword invalid");
    });
  }
  redirectTochoose(){
    this.router.navigate(['/choose'])
  }

  gotoRegister(){
    this.router.navigate(['/register'])
  }
}