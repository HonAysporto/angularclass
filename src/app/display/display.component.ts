import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { CommonModule } from '@angular/common';
import { ClasschildComponent } from '../classchild/classchild.component';
import { BehavioursubjectService } from '../services/behavioursubject.service';

interface User {
  Firstname: string;
  Lastname: string;
  Email: string;
  Phonenumber:string;
}

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule, ClasschildComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})

export class DisplayComponent implements OnInit{
  public users: User[] = []


  constructor(private userServive : UserserviceService, public behavioursub : BehavioursubjectService) {}

  ngOnInit() {
    // this.userServive.users$.subscribe(users => {
    //   this.users = users;
    //   // console.log(users);
    //   console.log(this.userServive.userSubject.value);
      
      
    // })


    this.users = (this.userServive.getArray());
    
  }

  run(user:any) {
    console.log(user);
    this.behavioursub.classwork.next(user)
    
  }
}
