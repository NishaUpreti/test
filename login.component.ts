import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernameR: any;
  psdR: any;
  loginform: FormGroup;
  loginservice: any;
  Employee: any = [];
  constructor(private _fb: FormBuilder, private service: LoginserviceService) {
    this.createForm();
  }
  createForm() {
    this.loginform = this._fb.group({
      username: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]

    })

  }
  get username1() {
    return this.loginform.controls.username;
  }
  get password1() {
    return this.loginform.controls.password;
  }
  submitForm() {
    if (this.loginform.valid) {
      alert("form is valid");
    }
    else {
      alert("form invalid");
    }
  }
  recieve(el) {
    debugger
    console.log(el);
    this.usernameR = el.username1;
    console.log(this.usernameR);
    this.psdR = el.psd1;
    console.log(this.psdR);

  }
  ngOnInit() {
    this.showconfig();
  }
  showconfig() {
    // this.loginservice.getconfig().subscribe((data:service)=>this.loginservice={
    //   this.users=data;
    // })
    return this.service.getconfig().subscribe((data: {}) => {
      this.Employee = data;
      console.log(this.Employee);
    })
  }
}
