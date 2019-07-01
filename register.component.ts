import { Component, OnInit } from '@angular/core';
import { literalArr } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data: any;

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    // alert(JSON.stringify(this.data));
  }
}
