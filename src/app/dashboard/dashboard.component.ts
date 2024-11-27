import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

interface User {
  Firstname: string;
  Lastname: string;
  Email: string;
}



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    constructor(public userserve: UserserviceService ) {}

  ngOnInit() {
      // console.log(this.userserve.getLastName());
      
  }
}
