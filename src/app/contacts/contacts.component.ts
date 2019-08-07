import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PersonsService } from '../persons.service';
import {contacts} from './contacts';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{

    loginForm: FormGroup;
    FirstName:string;
    LastName:string;
    PhoneNumber:string;
    Email:string;
    names:contacts[];
       


  delete(element){
    this.names.splice(element,1);
  }

  add(){
    this.names.push({FirstName:this.FirstName,LastName:this.LastName,PhoneNumber:this.PhoneNumber,Email:this.Email});
  }


  constructor(private service:PersonsService ,private fb: FormBuilder, private router:Router) {
    

    this.names= this.service.getPersons(); 
    
    this.loginForm = fb.group({
      email:['', Validators.required, Validators.email],
      password:['', Validators.required]
    })
  }

  email = new FormControl('', );
  first = new FormControl('', );
  last = new FormControl('', );
  phone = new FormControl('', );

  ErrorFirst() {
    return this.first.hasError('required') ? 'You must enter a value' :
            '';
  }

  
  ErrorLast() {
    return this.last.hasError('required') ? 'You must enter a value' :
            '';
  }

  
  ErrorPhone() {
    return this.phone.hasError('required') ? 'You must enter a value' :
            '';
  }

  ErrorEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }



  ngOnInit() {
  }





}