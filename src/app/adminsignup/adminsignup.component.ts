import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminsignup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adminsignup.component.html',
  styleUrl: './adminsignup.component.css'
})
export class AdminsignupComponent {

  constructor(public router:Router) {}

  public fullname = '';
  public email = '';
  public password = '';
  public phonenumber = "";
  public gender = "";
  public check = '';
  public date = '';
  public adminarray:any = []
  public feedbackmsg = '';
  public adminid:any = '';

ngOnInit() {
  if(localStorage['adminarray'] ){
    this.adminarray= JSON.parse(localStorage.getItem('adminarray')!)
  }
}

generateAdminId(): any {
  const randomNumber = Math.floor(Math.random() * 9) + 100; 
  return `admin${Date.now()}${randomNumber}`;
}



  signup() {

    this.adminid = this.generateAdminId()
    let adminobj = {
      fullname:this.fullname,
      email: this.email,
      password : this.password,
      phonenumber: this.phonenumber,
      gender:this.gender,
      date: this.date,
      adminid: this.adminid
    }

    for (let index = 0; index < this.adminarray.length; index++) {
      const element = this.adminarray[index];
      console.log(element.email);
      this.check =element.email
    }

    if (this.check == this.email) {
      this.feedbackmsg = 'email already exist'
    }  else {
      this.adminarray.push(adminobj);
      console.log(this.adminarray);
      localStorage.setItem('adminarray', JSON.stringify(this.adminarray))
      this.router.navigate(['adminsignin'])

      
    }

  }
}
