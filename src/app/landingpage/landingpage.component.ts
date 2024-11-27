import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';

interface User {
  Firstname: string;
  Lastname: string;
  Email: string;
  Phonenumber:string;
}

interface Product {
  product: string;
  description: string;
  
}


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [RouterLink, CommonModule, DashboardComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

constructor(public serve : UserserviceService) {}

public newArray:Product[] = [];
public anotherArray:User[] = []
ngOnInit () {
  // console.log(this.serve.getArray());
  // this.newArray = this.serve.getArray()
  // this.anotherArray = this.serve.assArray()
  // console.log(this.newArray);
  console.log(this.anotherArray)
  
}
}
