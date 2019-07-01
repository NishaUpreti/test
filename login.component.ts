import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  submitted: boolean;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.loginform = this._fb.group({
      username: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(8), Validators.pattern('^[a-zA-Z0-9!@#$%^&*()]+&')]]
    });
  }
  get username1() {
    return this.loginform.controls.username;
  }
  get password1() {
    return this.loginform.controls.password;
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginform.valid) {
      // alert("Form is valid");
    }
    // else
    //   alert('Form is invalid');
  }
}
