import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signuppro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signuppro.component.html',
  styleUrl: './signuppro.component.css'
})
export class SignupproComponent {
  constructor(public router:Router) {}

  public fullname = ''
  public email= ''
  public password = ''
  public phonenumber = ''
  public studentarray:any = [] 
  public check = ''
  public feedbackmsg = ''
  public image = null
  public selectclass = 'jss1';
  public selectdept = 'science';
  public gender = '';
  public date = '';
  public courses:any = []
  public status = "active";
  public notes:any = [];
  


  generateReceipt() {
    const randomNumbers = Math.floor(Math.random() * 1000);
    return `Student-${String(randomNumbers).padStart(3, '0')}`; 
}


  ngOnInit() {
if(localStorage['studentarray'] ){
  this.studentarray= JSON.parse(localStorage.getItem('studentarray')!)
}


  }

  

  signup() {
    let studentobj = {
      fullname:this.fullname,
      email: this.email,
      password : this.password,
      phonenumber: this.phonenumber,
      image: this.image,
      class: this.selectclass,
      dept: this.selectdept,
      gender:this.gender,
      date: this.date,
      courses:this.courses,
      status:this.status,
      note:this.notes,
      studentid: this.generateReceipt()
    }

    
    for (let index = 0; index < this.studentarray.length; index++) {
      const element = this.studentarray[index];
      console.log(element.email);
      this.check =element.email
    }
    if (this.check == this.email) {
      this.feedbackmsg = 'email already exist'
   
    } else {
      this.studentarray.push(studentobj)
      console.log(this.studentarray);
      localStorage.setItem('studentarray', JSON.stringify(this.studentarray))
      this.router.navigate(['studentsignin'])
    }
  }

}
