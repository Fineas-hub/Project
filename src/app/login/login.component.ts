import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder) {

    this.loginForm = fb.group({
      email:['', Validators.required, Validators.email],
      password:['', Validators.required]
    })
   }

  email = new FormControl('', );
  password = new FormControl('', );

  ErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  ErrorPassword(){
    return this.password.hasError('required') ? 'You must enter a password' : '';

  }

  

  ngOnInit() {
  }

}
