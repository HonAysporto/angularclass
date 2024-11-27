import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { StudentserviceService } from '../services/studentservice.service';

@Component({
  selector: 'app-editprofile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css'
})
export class EditprofileComponent {
  public userinfo:any = {};
  public studentArray:any 
  public studentIndex = 0
  public student:any
  public fullname = ''
  public email= ''
  public selectdept = 'science';
  public phonenumber = ''
  public feedbackmsg = ''
  public selectclass = 'jss1';
  public gender = '';
  public date = '';
  public stauts = '';

  constructor(public studentserve:StudentserviceService) {}

  ngOnInit() {
    this.studentserve.studentinfo.subscribe(res=> {
      console.log(res);
      this.userinfo = res;
    })

    this.studentArray = JSON.parse(localStorage.getItem("studentarray")!)

    this.studentArray.find((student: any, index: number) => {
      if (student.email == this.userinfo.email ) {
          this.studentIndex = index
          return true
      }
      return false 
  });

  // console.log(this.studentArray[this.studentIndex]);
  this.student = (this.studentArray[this.studentIndex]);
  

  this.fullname = this.student.fullname
  this.email = this.student.email
  this.selectdept = this.student.dept
  this.phonenumber = this.student.phonenumber
  this.selectclass=this.student.class
  this.gender=this.student.gender
  this.date=this.student.date


  }

    edit() {


      let editstudentobj = {
        fullname : this.fullname,
        email : this.email,
        dept: this.selectdept,
        phonenumber: this.phonenumber,
        class: this.selectclass,
        gender:this.gender,
        date:this.date,
        courses:this.student.courses,
        image:this.student.image,
        password: this.student.password,
        status: this.student.status
      }

      this.studentArray[this.studentIndex] = editstudentobj
      // console.log(this.studentArray);
      localStorage.setItem('studentarray', JSON.stringify(this.studentArray)) 
      this.studentserve.studentinfo.next(editstudentobj)
      this.feedbackmsg = 'Successfully Updated'

    }

}


