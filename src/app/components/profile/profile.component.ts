import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserControllerService } from 'api/userController.service';
import { UserPayload } from 'model/userPayload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  constructor(private userControllerService: UserControllerService,private  router:Router){}
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('', Validators.required),
  });
  oldUser: UserPayload = {}
  user: UserPayload = {}
  isFormSubmitted = false;
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.oldUser = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.user)
    if (Object.keys(this.user).length === 0) {
      this.router.navigate(['/user-login']);
    }
  }
  updateProfile(){
    this.isFormSubmitted = true
    console.log("saving...",this.user)
    if(this.form.value.password===this.user.password){
      this.userControllerService.save(this.user).subscribe((user :UserPayload)=> {
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user))
        this.router.navigate(['/search'])
      });
    }
  }
  cancel(){
    this.router.navigate(['/search']);
  }
}
