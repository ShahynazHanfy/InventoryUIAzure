import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Shared/Services/login.service'
import { error } from '@angular/compiler/src/util';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any
  password: any
  role: any
  loginedUserId: string
  constructor(private loginSer: LoginService, private routee: Router) { }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  ngOnInit(): void {
 

  // reset login status
 // this.authenticationService.logout();

  // get return url from route parameters or default to '/'
  //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  getData() {

    this.loginSer.login(this.username, this.password)
      .subscribe(
        res => {   
          console.log(res)
          this.routee.navigate(['/home/catalog'])                                                                                                                                                                                             
          localStorage.setItem("loginedUserId", res["loginedUserId"])
          localStorage.setItem("role", res["role"])
          // localStorage.setItem("clientId", res["clientId"])

          console.log("res is ", res)
         // this.role= localStorage.getItem("roles")
          localStorage.getItem("loginedUserId")
         console.log(localStorage.getItem("loginedUserId")
)
          if (this.role == 'Admin') {
          //  this.routee.navigate(['/group'])                                                                                                                                                                                             
            console.log(this.role)
          }
         
          // else {
          //   this.routee.navigate(['/home/tabs'])
          //   console.log(this.role)
          // }
        },err=>console.log(err)
        );
    // localStorage.clear();
  }
 

}
