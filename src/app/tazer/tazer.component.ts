import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface User {
  Firstname: string;
  Lastname: string;
  Email: string;
  Phonenumber:string;
}

@Component({
  selector: 'app-tazer',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './tazer.component.html',
  styleUrl: './tazer.component.css'
})
export class TazerComponent {

public firstname:string =''
public lastname:string =''
public email:string =''
public phonenumber:string =''

public users:User[] = [];
public newuser:any

constructor(public route : Router) {

  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const storedData = localStorage.getItem('information');
    if (storedData) {
      this.users = JSON.parse(storedData); 
    }
  }

  
}


create() {
  if (this.firstname == '' || this.lastname == '' || this.email == '' || this.phonenumber == '') {
      alert('Fill in your details')
  } else {
    let contactobj= {
      Firstname : this.firstname,
      Lastname: this.lastname,
      Email: this.email,
      Phonenumber: this.phonenumber
    }
  
    this.users.push(contactobj)
    console.log(this.users);
  
    localStorage.setItem('information', JSON.stringify(this.users))
  
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.phonenumber = '';
  }
  
}

delete(index:number) {
    this.users.splice(index, 1)
    localStorage.setItem('information', JSON.stringify(this.users))
}

viewcontact(index:number) {
  localStorage.setItem('viewobject', JSON.stringify(this.users[index]))
  console.log(localStorage['viewobject']);
  
}

check(index:number) {
  this.route.navigate([`/tazer/edit/${index}`])
}

 

}



