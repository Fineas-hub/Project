import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {contacts} from '../contacts/contacts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 
 details;
 Ed;




  constructor(private route: ActivatedRoute) { }

  Edit(){
    this.Ed = !this.Ed;
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.details = contacts[+params.get('i')];
    });
  


  }

}
