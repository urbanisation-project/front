import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserPayload} from "../../../../model/userPayload";
import {UserControllerService} from "../../../../api/userController.service";

@Component({
  selector: 'app-change-user-password',
  templateUrl: './change-user-password.component.html',
  styleUrls: ['./change-user-password.component.scss']
})
export class ChangeUserPasswordComponent implements OnInit {
  constructor(private userControllerService: UserControllerService,private  router:Router){}
  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  user: UserPayload = {}
  isFormSubmitted = false;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.user)
    if (Object.keys(this.user).length === 0) {
      this.router.navigate(['/user-login']);
    }
  }
  updatePassword(){
    this.isFormSubmitted = true;
    if(this.form.value.oldPassword===this.user.password){
      this.user.password=this.form.value.newPassword!;
      this.userControllerService.save(this.user).subscribe((user :UserPayload)=> {
        localStorage.setItem("user", JSON.stringify(user))
        this.router.navigate(['/search'])
      });
    }
  }
  cancel(){
    this.router.navigate(['/search']);
  }

}
