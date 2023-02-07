import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserControllerService } from 'api/userController.service';
import { UserPayload } from 'model/userPayload';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  form = new FormGroup({
    id: new FormControl('-1'),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  isFormSubmitted = false;
  constructor(private userControllerService:UserControllerService, private router: Router){}
  ngOnInit(): void {
  }

  onSubmit() {
    this.isFormSubmitted = true;
    this.userControllerService.save(this.form.value as UserPayload).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/user-login']);
    });
  }

  gotoLogin(){
    this.router.navigate(['/user-login']);
  }
}