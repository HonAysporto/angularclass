import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { TazerComponent } from './tazer/tazer.component';
import { TestComponent } from './test/test.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';

interface Obj {
  fullname: string;
  phonenumber: number;
  state: string;
  email: string;
}

interface test {

  firstname: string,
  phonenumber:number,
  email:string
}

interface NewObj {
  product: string;
  category: string;
  userdetails: {firstname: string; phonenumber: number; email: string }[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TazerComponent, TestComponent, EditComponentComponent, DashboardComponent],  // Add CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Rectangular60';
  name = "Ayomide";
  number: number | string = 60;
  public check: boolean = true;

  public arrayone: (number | string | boolean | Obj)[] = [
    1, 2, "Ayomide", true, {
      fullname: "Awosika Ayomide",
      phonenumber: 9037103819,
      state: "Oyo",
      email: "ayomideoluwafemi2019@gmail.com"
    }
  ];

  public objone: {
    name: string;
    age: number;
    address: string;
  } = {
    name: "Ayomide",
    age: 56,
    address: "Lagos"
  };

  public objtwo: Obj = {
    fullname: "",
    phonenumber: 54,
    state: "",
    email: ""
  };

  public objthree: NewObj = {
    product: "Rice",
    category: "Food",
    userdetails: [{
      firstname: "Awosika Ayomide",
      phonenumber: 54,
      email: "ayomideoluwafemi2019@gmail.com"
    }, {
      firstname: "Awosika Ayoyinka",
      phonenumber: 100,
      email: "ayomideayoyinka2@gmail.com"
    }, {
      firstname: "Awosika Ayobami",
      phonenumber: 100,
      email: "ayomideayobami@gmail.com"
    }, {
      firstname: "Awosika Ayo",
      phonenumber: 300,
      email: "ayomideayobami@gmail.com"
    }]
  };



  
  buyers:test[] = this.objthree.userdetails
  

  constructor() {
    
    // this.buyers = this.objthree.userdetails.map(buyer => {
    //   return {
    //     firstname: buyer.firstname,
    //     phonenumber: buyer.phonenumber,
    //     email: buyer.email
    //   };
    // });
  }

  run() {
    if (this.check === true) {
      alert(this.check);
    }
    this.number = "Ay";
  }
}
