import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonsService } from '../persons.service';
import {contacts} from '../contacts/contacts';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 
 details;
 Ed;
 names:contacts[];




  constructor(private service:PersonsService ,private route: ActivatedRoute) { }

  Edit(){
    this.Ed = !this.Ed;
  }

  ngOnInit() {

    this.names = this.service.getPersons();
    this.route.paramMap.subscribe(params => {
    this.details = this.names[+params.get('i')];
    });
  


  }

}
