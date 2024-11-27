import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentserviceService } from '../services/studentservice.service';

@Component({
  selector: 'app-addcourses',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addcourses.component.html',
  styleUrl: './addcourses.component.css'
})
export class AddcoursesComponent {
  public userinfo:any;
  public studentIndex = 0
  public allstudent:any = [];
  public selectedcourse:any = []
  public errormsg = ''; 
  public addedmsg = '';
  public studentcourses:any = []


  constructor(public studentserve:StudentserviceService)  {}

  ngOnInit() {
    this.studentserve.studentinfo.subscribe(res=> {
      console.log(res);
      this.userinfo = res;
    })   

   this.allstudent = JSON.parse(localStorage.getItem('studentarray')!)
   this.studentcourses = this.allstudent[this.studentIndex].courses 


  }


  run(subject:string) {
    console.log(subject);

    this.allstudent.find((student: any, index: number) => {
      if (student.email == this.userinfo.email ) {
          this.studentIndex = index
          return true
      }
      return false 
  });

    
  
  
    if (this.allstudent[this.studentIndex].courses.includes(subject)) {
      // alert('prob')
      this.errormsg = 'Subject added already'
    } else {
      this.allstudent[this.studentIndex].courses.push(subject)
      // console.log(this.allstudent[this.studentIndex].courses);
      this.errormsg = 'Subject added successfully'
    }
    
    
    localStorage.setItem('studentarray', JSON.stringify(this.allstudent))
    this.studentcourses = this.allstudent[this.studentIndex].courses

    // console.log(this.allstudent);
    
  }

}
