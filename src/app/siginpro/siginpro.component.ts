import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { StudentserviceService } from '../services/studentservice.service';


@Component({
  selector: 'app-siginpro',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './siginpro.component.html',
  styleUrl: './siginpro.component.css'
})
export class SiginproComponent {
  constructor (public router: Router, public studentserve : StudentserviceService) {}
  public email = ''
  public password = ''
  public studentarray:any = []
  public msg =''

  ngOnInit() {


    this.studentarray= JSON.parse(localStorage.getItem('studentarray')!)
  }

  signin() {
    console.log(this.studentarray);
    
    let student = this.studentarray.find((student:any, index:number)=>student.email==this.email && student.password==this.password)

    if(student) {
      if (student.status == 'active') {
        console.log(student.status);
        localStorage.setItem('studentdetails', JSON.stringify(student))
        this.studentserve.savestudentinformation(student);
        this.studentserve.studentinfo.next(student)
        this.router.navigate(['studentdashboard'])
      } else {
        this.msg = 'Account deactivated, See front desk';
      }
     
    } else {
      this.msg = 'no record found'
      // console.log('no record found');
    }
  }

}
