import { Injectable } from '@angular/core';

import {CONTACTS} from './contacts/mock-persons';

import {contacts} from './contacts/contacts';


@Injectable()
export class PersonsService {
  
 





  constructor() {
  


   }



   getPersons(): contacts[]{
    return CONTACTS;
  }
  


}