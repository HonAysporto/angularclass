import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehavioursubjectService {

  constructor() { }
  public behavior = new BehaviorSubject('Oyindamola')

  public classwork = new BehaviorSubject({
    Firstname: 'No name yet',
    Lastname: 'No name yet',
    Email: 'No email yet',
    Phonenumber: "No Number yet"
  })
}
